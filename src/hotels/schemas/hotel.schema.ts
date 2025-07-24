import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type HotelDocument = Hotel & Document;
@Schema()
export class Hotel{
    @Prop({required:true})
    tenantId: string;

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    address:string;

    @Prop({required:true})
    city:string;

    @Prop({required:true})
    state:string;

    @Prop({required:true})
    country:string;

    @Prop({required:true})
    phone:string;

    @Prop({required:true})
    email:string;
}
export const HotelSchema = SchemaFactory.createForClass(Hotel)
