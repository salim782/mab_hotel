import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsOptional, IsIn } from 'class-validator';

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
  
//   @ApiProperty()
//   @IsIn(['owner', 'manager', 'receptionist', 'chef', 'staff'])
  role: string;
}
