import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {

  @ApiProperty({type:String})
  @IsString()
  @MinLength(8)
  newPassword: string;


  @ApiProperty({type:String})
  @IsString()
  @MinLength(8)
  confirmPassword: string;
}
