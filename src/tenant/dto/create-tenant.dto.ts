import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateTenantDto {
  @ApiProperty()
  @IsString() name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  companyEmail?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  contactPhone?: string;

   @ApiProperty()
  @IsOptional()
  @IsString()
  ownerId?: string;
}
