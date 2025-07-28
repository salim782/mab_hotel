import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString, MinLength } from "class-validator";
export type UsersDocument = Users & Document
@Schema({
    timestamps:true
})
 export class Users{
    @Prop({required:true,type:String})
    name: string

    @Prop({required:true,type:String, unique: true})
    email: string

    @Prop({required:true,type:String})
    password: string

    @Prop()
    phone: string;

    @Prop({ enum: ['user','owner', 'manager', 'receptionist', 'chef', 'staff'], default: 'user' })
    role: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop()
    otp?: string;

    @Prop()
    otpExpires?: Date;

     @IsString()
     @MinLength(6)
     newPassword: string;

     @IsString()
     @MinLength(6)
     confirmPassword: string;



 }
 export const usersSchema = SchemaFactory.createForClass(Users)
