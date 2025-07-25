import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type BillingDocument = Billing & Document;
@Schema({timestamps:true})

export class Billing{
    @Prop({required:true})
    bookingId:string;

    @Prop({required:true})
    invoiceNumber:string;

    @Prop({required:true})
    tax:number;

    @Prop({required:true})
    discount:number;

    @Prop({required:true})
    finalAmount:number;

    @Prop({required:true})
    issuedAt:Date;
}
export const BillingSchema = SchemaFactory.createForClass(Billing)