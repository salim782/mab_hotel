import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateReservationCalenderDto {
    @ApiProperty()
    @IsString()
    date:Date;

    @ApiProperty()
    @IsString()
    roomCategory:string;

    @ApiProperty()
    @IsNumber()
    totalRooms:Number;

    @ApiProperty()
    @IsNumber()
    bookedRooms: Number;

    @ApiProperty()
    @IsNumber()
    availableRooms: Number;

    @ApiProperty()
    @IsString()
    roomNumbers: string[];

    @ApiProperty()
    @IsString()
    hotalBranch: string;

    @ApiProperty()
    @IsString()
    bookingIds: string[];

    @ApiProperty()
    @IsString()
    status:string;
}
