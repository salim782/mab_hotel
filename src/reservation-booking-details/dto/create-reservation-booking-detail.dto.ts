import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class CreateReservationBookingDetailDto {
    @ApiProperty()
    @IsString()
    bookingNo: string;

    @ApiProperty()
    @IsString()
    guestName: string;

    @ApiProperty()
    @IsString()
    mobileNo: string;

    @ApiProperty()
    @IsDate()
    arrivalDate: Date;

    @ApiProperty()
    @IsDate()
    fromDate: Date;

    @ApiProperty()
    @IsDate()
    toDate: Date;

    @ApiProperty()
    @IsString()
    company: string;

    @ApiProperty()
    @IsString()
    salesRepBy: string;

    @ApiProperty()
    @IsString()
    bookedBy: string;

    @ApiProperty()
    @IsString()
    confirmVoucherNo: string;

    @ApiProperty()
    @IsString()
    roomNo: string;

    @ApiProperty()
    @IsString()
    reservationType: string;

    @ApiProperty()
    @IsNumber()
    numberOfDays: number;

    @ApiProperty()
    @IsDate()
    reservationDate: Date;

    @ApiProperty()
    @IsNumber()
    numberOfRooms: number;

    @ApiProperty()
    @IsString()
    roomDetails: string;


    @ApiProperty()
    @IsDate()
    departureDate: Date;

    @ApiProperty()
    @IsNumber()
    totalAmount: Number;

    @ApiProperty()
    @IsNumber()
    paidAmount: Number;

    @ApiProperty()
    @IsNumber()
    balenceAmount: Number;

    @ApiProperty()
    @IsString()
    serviceDetail: string;

    @ApiProperty()
    @IsBoolean()
    isEdited:boolean;

}
