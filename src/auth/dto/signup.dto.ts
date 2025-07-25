import { ApiProperty } from "@nestjs/swagger";

export class SignUpDto {
    @ApiProperty({type:String})
    name:string;
    
    @ApiProperty({type:String})
    email:string;

    @ApiProperty({type:String})
    password: string;

    @ApiProperty({ type: String })
  confirmPassword: string;
}