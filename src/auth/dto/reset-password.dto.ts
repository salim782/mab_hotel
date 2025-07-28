import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {

  @ApiProperty({type:String})
  @IsString()
  @MinLength(6)
  newPassword: string;


  @ApiProperty({type:String})
  @IsString()
  confirmPassword: string;
}
