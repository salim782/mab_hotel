import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class VerifyOtpDto {
//   @ApiProperty({type:string})
//   @IsEmail()
//   email: string;
  @ApiProperty({ example: '123456', description: 'OTP received on email' })
  @IsNotEmpty()
  otp: string;
}
