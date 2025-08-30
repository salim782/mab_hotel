import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto){
    return await this.authService.SignUp(signUpDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return await this.authService.login(loginDto, res);
  }

   @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    return await this.authService.logout(res);
  }
  

@Post('forget-password')
forgetPassword(@Body() dto: ForgotPasswordDto) {
  return this.authService.forgetPassword(dto);
}

@Put('reset-password')
resetPassword(@Body() dto: ResetPasswordDto) {
  return this.authService.resetPassword(dto);
}

}