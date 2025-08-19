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

    // @Prop({required:true, type:String})
    // emailAlt: string;

    @Prop({required:true, type:String})
    reservationType: string;

    @Prop({required:true, type:String})
    mobileNo: string;

    // @Prop({required:true, type:String})
    // mobileNo2: string;

    @Prop({required:true, type:String})
    address: string;

    @Prop({required:true, typ:Date})
    dob: Date;

    @Prop({required:true, type:String})
    gender: string;

    // @Prop({type:String})
    // employeeType: string;

    @Prop({type:String})
    pickDropFacility: string;

    @Prop({type:String})
    visitPurpose: string;

    @Prop({type:String})
    arrivalFrom: string;

    @Prop({type:String})
    departureTo: string;

    @Prop({type:String})
    country: string;


    // @Prop({type:String})
    // state: string;

    // @Prop({type:String})
    // city: string;

    @Prop({required:true, type:String})
    zipCode: string;

    // @Prop({type:String})
    // bookedBy: string;

    // @Prop({type:String})
    // transportMode: string;

    // @Prop({type:String})
    // confirmVoucherNo: string;

    // @Prop({type:String})
    // businessMarketSource: string;

    // @Prop({type:String})
    // company: string;

    // @Prop({type:String})
    // companyGstNo: string;
}

export const NewReservationSchemas = SchemaFactory.createForClass(NewReservation);