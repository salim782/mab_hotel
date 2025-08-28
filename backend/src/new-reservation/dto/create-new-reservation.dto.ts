import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateNewReservationDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsString()
    email: string;

    // @ApiProperty()
    // @IsString()
    // emailAlt: string;

    @ApiProperty()
    @IsString()
    resevationType: string;

    @ApiProperty()
    @IsString()
    mobileNo: string;

    @ApiProperty()
    @IsString()
    mobileNo2: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    dob: Date;

    @ApiProperty()
    @IsString()
    gender: string;

    // @ApiProperty()
    // @IsString()
    // employeeType:string

    @ApiProperty()
    @IsString()
    pickDropFacility: string;

    @ApiProperty()
    @IsString()
    visitPurpose: string;

    @ApiProperty()
    @IsString()
    arrivalFrom: string;

    @ApiProperty()
    @IsString()
    departureTo: string;

    @ApiProperty()
    @IsString()
    country: string;

    @ApiProperty()
    @IsString()
    state: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    zipCode: string;

    @ApiProperty()
    @IsString()
    bookedBy: string;

    // @ApiProperty()
    // @IsString()
    // transportMode: string;

    // @ApiProperty()
    // @IsString()
    // confirmVoucherNo: string;

    // @ApiProperty()
    // @IsString()
    // businessMarketSource: string;

    // @ApiProperty()
    // @IsString()
    // company: string;

    // @ApiProperty()
    // @IsString()
    // companyGstNo: string;
}
