import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/schemas/users.schemas';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import * as crypto from 'crypto';
import { Response } from 'express';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';


// ✅ Reusable cookie helpers
function setLoginCookie(res: Response, token: string) {
  const isProd = process.env.NODE_ENV === 'production';

  res.cookie('auth_token',token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  });
}

function clearLoginCookie(res: Response) {
  res.clearCookie('auth_token', {
    // httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    path: '/',
  });
}


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
    const { name, email, password, confirmPassword } = signUpdto;
    if (password !== confirmPassword) {
      throw new UnauthorizedException('Passwords do not match');
    }
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new UnauthorizedException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = {
      id: user._id, 
      name: user.name, 
      email: user.email,
      role: user.role,
    };
    const token = this.jwtService.sign(payload);

    return { 
      message: 'User registered successfully',
      user: payload,
      token 
    };
  }

  async login(loginDto: LoginDto, res: Response) {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { 
      id: user._id, 
      name: user.name, 
      email: user.email,
      role: user.role,
    };

    const token = this.jwtService.sign(payload);

    // ✅ Cookie set karein
    setLoginCookie(res, token);

    return { 
      message: 'Login successful',
      user: payload,
      token,
    };
  }

  async logout(res: Response) {
    // ✅ Cookie clear karein
    clearLoginCookie(res);
    return { message: 'Logout successful' };
  }

  async forgetPassword(dto: ForgotPasswordDto) {
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) {
      throw new NotFoundException('User not found with this email');
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    user.resetPasswordToken = token;
    user.resetPasswordExpires = expires;
    await user.save();

    const resetLink = `http://localhost:3001/reset-password?token=${token}&email=${user.email}`;

    await this.transporter.sendMail({
      to: user.email,
      subject: 'Password Reset Request',
      html: `<p>You requested to reset your password.</p>
             <p>Click <a href="${resetLink}">here</a> to reset it. This link is valid for 1 hour.</p>`,
    });

    return { message: 'Password reset link sent to email' };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.userModel.findOne({
      resetPasswordToken: dto.token,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      throw new BadRequestException('Token is invalid or expired');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    return { message: 'Password reset successful' };
  }
}
