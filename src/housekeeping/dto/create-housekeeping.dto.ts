import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";

export class CreateHousekeepingDto {
     @IsString()
  hotelId: string;

  @IsString()
  roomId: string;

  @IsString()
  staffId: string;

  @IsDateString()
  date: Date;

  @IsEnum(['scheduled', 'in-progress', 'done'])
  @IsOptional()
  status?: 'scheduled' | 'in-progress' | 'done';

  @IsString()
  @IsOptional()
  notes?: string;

}
