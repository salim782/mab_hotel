import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ApiBody } from '@nestjs/swagger';
import { VerifyOtpDto } from './dto/verify-otp.dto';

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
  @ApiBody({ type: ForgotPasswordDto })
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Post('verify-otp')
@ApiBody({ type: VerifyOtpDto }) 
verifyOtp(@Body() dto: VerifyOtpDto) {
  return this.authService.verifyOtp(dto.otp);
}

//  @Post('reset-password')
// resetPassword(@Body('newPassword') newPassword: string) {
//   return this.authService.resetPasswordOnlyNew({ newPassword });
// }

@Post('reset-password')
@ApiBody({ type: ResetPasswordDto })
resetPassword(@Body() dto: ResetPasswordDto) {
  return this.authService.resetPassword(dto);
}

}