import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBillingDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    bookingId:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    invoiceNuumber:string;

    @ApiProperty()
    @IsString()
    @IsNumber()
    amount:number;



    @ApiProperty()
    @IsEnum(['cash','card','online'])
    paymentMetod: 'cash'|'card'|'online'

    @ApiProperty()
    @IsNumber()
    tax:number;

    @ApiProperty()
    @IsNumber()
    discount: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    finalAmount:number;

    @ApiProperty()
    @IsDateString()
    issuedAt:Date;
}
