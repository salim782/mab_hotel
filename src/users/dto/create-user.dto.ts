import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsOptional, IsIn, IsEnum } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
 
  @ApiProperty()
  @IsOptional()
  @IsString()
  phone?: string;

  // @IsOptional()
  // @IsString()
  // role?: string;
  @ApiProperty({ enum: ['user', 'admin', 'manager', 'staff'], required: false })
  @IsOptional()
  @IsEnum(['user', 'admin', 'manager', 'staff'])
  role?: string;

}
