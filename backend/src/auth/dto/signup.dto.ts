import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString, minLength, MinLength } from "class-validator";

export class SignUpDto {
    @ApiProperty({type:String})
    @IsString()
    name:string;
    
    @ApiProperty({type:String})
    @IsString()
    email:string;

    @ApiProperty({type:String, minLength:8})
    @MinLength(8)
    password: string;

    @ApiProperty({ type: String, minLength:8 })
    @MinLength(8)
    confirmPassword: string;

    @ApiProperty({ enum: ['user', 'admin', 'manager', 'staff'], required: false })
    @IsOptional()
    @IsEnum(['user', 'admin', 'manager', 'staff'])
    role?: string;
}