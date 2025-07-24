import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateHotelDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    tenantId:string;
 
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    city:string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    state:string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    country:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty()
    @IsEmail()
    email:string;

    // @IsArray()
    // amenities:string[];

}


