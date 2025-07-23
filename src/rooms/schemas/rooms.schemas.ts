import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RoomsDocument = Rooms & Document;

@Schema({timestamps: true})
export class Rooms{
    @Prop({required:true})
    tenantId:string;

    @Prop({required:true, unique:true})
    roomNumber:string;

    @Prop({required:true,enum:['Deluxe', 'Suite', 'Standard']})
    category: 'Deluxe'|'Suite'|'Standard';

    @Prop({type:[String]})
    amenities:string[];

    @Prop({required:true})
    pricePerNight:number;

    @Prop({default:true})
    isAvailable:boolean;

    @Prop({type:[String]})
    image: string[]

    @Prop({ required: true, enum: ['available', 'booked', 'maintenance'], default: 'available' })
    status: 'available' | 'booked' | 'maintenance';
}
export const RoomsSchema = SchemaFactory.createForClass(Rooms);