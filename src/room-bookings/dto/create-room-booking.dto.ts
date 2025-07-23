import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsString } from "class-validator";

export class CreateRoomBookingDto {
    @ApiProperty()
    @IsString()
    customerName: string;

    @ApiProperty()
    @IsOptional() 
    @IsString() 
    customerPhone?: string;

    @ApiProperty()
    @IsString() 
    roomNumber: string;

    @ApiProperty()
    @IsDateString() 
    checkInDate: string;

    @ApiProperty()
    @IsDateString() 
    checkOutDate: string;

    @ApiProperty()
    @IsOptional() 
    @IsString() 
    status?: string;
}
