import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class ReservationBookingDetail{
    @Prop({required:true, type:String})
    bookingNo: string;

    @Prop({required:true, type:String})
    guestName: string;

    @Prop({required:true, type:String})
    mobileNo: string;

    @Prop({required:true, type:Date})
    arrivalDate: Date;

    @Prop({required:true, type:Date})
    fromDate: Date;

    @Prop({required:true, type:Date})
    toDate: Date;

    @Prop({required:true, type:String})
    company: string;

    @Prop({required:true, type:String})
    salesRepBy: string;

    @Prop({required:true, type:String})
    bookedBy: string;

    @Prop({required:true, type:String})
    confirmVoucherNo: string;

    @Prop({required:true, type:String})
    roomNo: string;

    @Prop({required:true, type:String})
    reservationType: string;

    @Prop({required:true, type:Number})
    numberOfDays: number;

    @Prop({required:true, type:Date})
    reservationDate: Date;

    @Prop({required:true, type:Number})
    numberOfRooms: number;

    @Prop({required:true, type:String})
    roomDetails: string;

    @Prop({required:true, type:Date})
    departureDate: Date;

    @Prop({required:true, type:Number})
    totalAmount: Number;

    @Prop({required:true, type:Number})
    paidAmount: Number;

    @Prop({required:true, type: Number})
    balenceAmount: Number;

    @Prop({requrid:true, type: String})
    serviceDetail: string;

    @Prop({requrid:true, default:false})
    isEdited:boolean;
}
export const ReservationBookingDetailSchemas = SchemaFactory.createForClass(ReservationBookingDetail);

