import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class ReservationCalender{

    @Prop({required:true, type:Date})
    date:Date;

    @Prop({required:true, type:String})
    roomCategory:string;

    @Prop({required:true, type:Number})
    totalRooms:Number;

    @Prop({required:true, type:Number})
    bookedRooms: Number;

    @Prop({required:true, type:Number})
    availableRooms: Number;

    @Prop({required:true, type:[String]})
    roomNumbers: string[];

    @Prop({required:true, type:String})
    hotalBranch: string;

    @Prop({required:true, type:[String]})
    bookingIds: string[];

    @Prop({required:true})
    status: 'available' | 'partial' | 'full';
}

export const ReservationCalenderSchemas = SchemaFactory.createForClass(ReservationCalender);

