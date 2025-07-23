import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateRoomDto {
    @IsString()
    @IsNotEmpty()
    tenantId:string;

    @IsString()
    @IsNotEmpty()
    roomNumber:string;

    @IsEnum(['Deluxe','Suite', 'Standard'])
    category:'Deluxe'|'Suite'|'Standard';

}
