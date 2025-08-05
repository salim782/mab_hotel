import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginDto{
@ApiProperty({type:String})
@IsEmail()
email:string;

@ApiProperty({type:String, minLength:6})
@IsString()
password: string;
}