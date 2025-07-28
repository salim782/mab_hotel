import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto){
    return await this.authService.SignUp(signUpDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto){
    return await this.authService.login(loginDto);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() dto: { email: string }) {
  return this.authService.forgotPassword(dto);
  }

  @Post('verify-otp')
  verifyOtp(@Body('otp') otp: string) {
    return this.authService.verifyOtp(otp);
  }

//  @Post('reset-password')
// resetPassword(@Body('newPassword') newPassword: string) {
//   return this.authService.resetPasswordOnlyNew({ newPassword });
// }

}