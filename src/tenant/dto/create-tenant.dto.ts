import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateTenantDto {
  @ApiProperty()
  @IsString() name: string;
  @IsString() slug: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

   @ApiProperty()
  @IsOptional()
  @IsString()
  contactPhone?: string;

   @ApiProperty()
  @IsOptional()
  @IsString()
  ownerId?: string;
}
