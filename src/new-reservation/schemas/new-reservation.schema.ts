import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type NewReservationDocument = NewReservation & Document
@Schema({timestamps:true})

export class NewReservation{
    @Prop({required:true, type:String})
    title: string;

    @Prop({required:true, type:String})
    firstName: string;

    @Prop({required:true, type:String})
    lastName: string;

    @Prop({required:true, type:String})
    email: string;

    @Prop({required:true, type:String})
    emailAlt: string;

    @Prop({required:true, type:String})
    reservationType: string;

    @Prop({required:true, type:String})
    mobileNo: string;

    @Prop({required:true, type:String})
    mobileNo2: string;

    @Prop({required:true, type:String})
    address: string;

    @Prop({required:true, typ:Date})
    dob: Date;

    @Prop({required:true, type:String})
    gender: string;

    @Prop({requrid:true, type:String})
    employeeType: string;

    @Prop({required:true, type:String})
    pickDropFacility: string;

    @Prop({required:true, type:String})
    visitPurpose: string;

    @Prop({required:true, type:String})
    arrivalFrom: string;

    @Prop({required:true, type:String})
    departureTo: string;

    @Prop({required:true, type:String})
    country: string;


    @Prop({required:true, type:String})
    state: string;

    @Prop({required:true, type:String})
    city: string;

    @Prop({required:true, type:String})
    zipCode: string;

    @Prop({required:true, type:String})
    bookedBy: string;

    @Prop({required:true, type:String})
    transportMode: string;

    @Prop({required:true, type:String})
    confirmVoucherNo: string;

    @Prop({required:true, type:String})
    businessMarketSource: string;

    @Prop({required:true,type:String})
    company: string;

    @Prop({required:true,type:String})
    companyGstNo: string;
}

export const NewReservationSchemas = SchemaFactory.createForClass(NewReservation);