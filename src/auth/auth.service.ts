import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/schemas/users.schemas';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private transporter: any;
  constructor(
    @InjectModel(Users.name)
    private userModel: Model<Users>,
    private jwtService: JwtService,
    private configService: ConfigService
  ) { 
     this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('YOUR_APP_PASSWORD'),
      },
    });
  }

  async SignUp(signUpdto: SignUpDto){
    const { name, email, password,confirmPassword,role} = signUpdto;
    if (password !== confirmPassword) {
    throw new UnauthorizedException('Passwords do not match');
  }
  const existingUser = await this.userModel.findOne({ email });
  if (existingUser) {
    throw new UnauthorizedException('Email already registered');
  }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const payload = {
      id: user._id, 
      name: user.name, 
      email: user.email,
      password:user.password,
      role:user.role,
    };
    const token = this.jwtService.sign(payload)
    return { 
      message: 'User registered successfully',
      user:payload,
      token 
    };
  }

  async login(loginDto:LoginDto){
    const {email,password} = loginDto;
    const user = await this.userModel.findOne({email})
    if(!user){
      throw new UnauthorizedException('Invalid email and password')
    }
    const isPasswordMatched = await bcrypt.compare(password,user.password)
    if(!isPasswordMatched){
      throw new UnauthorizedException('invalid email or password')
    }
    const payload = { 
      id: user._id, 
      name: user.name, 
      email: user.email,
      role: user.role,
    };
    const token = this.jwtService.sign(payload)
    return { 
      message: 'Login successful',
      user: payload,
      token
     };
  }

async forgotPassword(dto: ForgotPasswordDto) {
  const { email } = dto;
  if (!email) {
    throw new BadRequestException('Email is required');
  }
  const user = await this.userModel.findOne({ email });
  // Don't reveal whether email exists or not
  if (!user) {
    return { message: 'If your email is registered, an OTP has been sent.' };
  }
  // Generate OTP and expiry
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
  user.otp = otp;
  user.otpExpires = expiry;
  await user.save();
  try {
    const result = await this.transporter.sendMail({
      from: this.configService.get<string>('EMAIL_USER'),
      to: user.email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}. It will expire in 15 minutes.`,
    });
    console.log('OTP email sent:', result.response);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new BadRequestException('Failed to send email');
  }
  return {
    message: 'OTP has been sent to your registered email.',
  };
}


 async verifyOtp(otp: string) {
    const user = await this.userModel.findOne({
      otp,
      otpExpires: { $gt: new Date() }
    });
    if (!user) {
      throw new BadRequestException('Invalid or expired OTP');
    }
    return {
      message: 'OTP verified successfully',
      userId: user._id 
    };
  }


  async resetPassword(userId: string, dto: ResetPasswordDto) {
  const { newPassword, confirmPassword } = dto;
  if (newPassword !== confirmPassword) {
    throw new BadRequestException('Passwords do not match');
  }
  const user = await this.userModel.findById(userId);
  if (!user) {
    throw new NotFoundException('User not found');
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();
  return {
    message: 'Password reset successfully',
  };
}

}