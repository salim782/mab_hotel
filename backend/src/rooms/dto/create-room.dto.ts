import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
  IsArray,
  IsIn,
} from 'class-validator';

export class CreateRoomDto {

  @ApiProperty()  
  @IsNotEmpty()
  @IsString()
  tenantId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  hotelId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  roomNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  capacity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pricePerNight: number;

  @ApiProperty()
  @IsBoolean()
  isAvailable: boolean;

  @ApiProperty()
  @IsArray()
  features: string[];

  @ApiProperty()
  @IsIn(['available', 'booked', 'maintenance'])
  status: 'available' | 'booked' | 'maintenance';
}
