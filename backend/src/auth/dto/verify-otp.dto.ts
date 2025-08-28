import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({ example: '123456', description: 'OTP received on email' })
  @IsNotEmpty()
  @IsString()
  otp: string;
}
