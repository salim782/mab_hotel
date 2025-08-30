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

  res.cookie('auth_token', token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  });
}

function clearLoginCookie(res: Response) {
  res.clearCookie('auth_token', {
    httpOnly: true,
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
    html: `<body style="margin:0; padding:0; background-color:#ffffff; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; padding: 20px 0;">
    <tr>
      <td align="center">
        <!-- Main container -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff; border-radius:6px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
          
          <!-- Logo -->
          <tr>
            <td align="center" style="padding: 30px 20px 10px; background:#ffffff;">
              <img src="cid:logo" 
                   alt="Mabsol Logo" 
                   style="max-width:110px; height:auto; display:block; margin:0 auto;" />
            </td>
          </tr>

          <!-- Lock Image + Title -->
          <tr>
            <td align="center" style="padding:5px;">
              <img src="cid:lock" 
                   alt="lock" 
                   width="100" 
                   style="margin-bottom:10px;">
              <h2 style="font-size:22px; color:#333333; margin:0 0 10px;">Reset your password</h2>
              <p style="font-size:15px; color:#555555; margin:0 0 25px;">
                We've got a request from you to reset the password for your account. 
                Please click on the button below to get a new password.
              </p>

              <!-- Button -->
              <a href="${resetLink}" 
                 style="background-color:#3b49df; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:4px; font-size:16px; font-weight:bold; display:inline-block;">
                Reset my password
              </a>
            </td>
          </tr>

          <!-- Support Info -->
          <tr>
            <td style="padding: 30px 20px 10px; color:#555555; font-size:14px; line-height:20px;">
              <p style="margin:0 0 15px;">
                <strong>Questions?</strong><br>
                Please let us know if there's anything we can help you with by replying 
                to this email or by emailing 
                <a href="mailto:help@mabsolhotelteam.com" style="color:#3b49df; text-decoration:none;">help@mabsolhotelteam.com</a>.
              </p>
              <p style="margin:0 0 15px;">
                If you didn't request a password reset, we recommend you get in touch with 
                our support team and secure your account.<br>
                <a href="tel:18776576879" style="color:#3b49df; text-decoration:none; font-weight:bold;">Call us at 1(877-6576-8789)</a> 
                or write to us at 
                <a href="mailto:help@mabsolcompany.com" style="color:#3b49df; text-decoration:none; font-weight:bold;">help@mabsolcompany.com</a>.
              </p>
            </td>
          </tr>

          <!-- Thank You -->
          <tr>
            <td align="left" style="padding: 20px; font-size:14px; color:#555555;">
              <p style="margin:0; font-weight:500;">
                Thank you,<br>
                <span style="font-weight:bold;">Mabsol Hotel Team</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="font-size:12px; color:#999999; padding: 10px 20px 20px;">
              <p style="margin:0;">Copyright © 2025 | Mabsol Hotel | All rights reserved</p>
            </td>
          </tr>

        </table>
        <!-- End container -->
      </td>
    </tr>
  </table>
</body>`,
    attachments: [
      {
        filename: 'logo.jpg',
        path: 'src/auth/reset/logo.jpg',
        cid: 'logo'
      },
      {
        filename: 'lock.jpeg',
        path: 'src/auth/reset/lock.jpeg',
        cid: 'lock'
      }
    ]
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

    return { message: 'Password reset successfully' };
  }
}
