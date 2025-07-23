import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RoomBookingDocument = RoomBooking & Document;

@Schema({ timestamps: true })
export class RoomBooking {

  @Prop({ required: true }) 
  customerName: string;

  @Prop() 
  customerPhone: string;

  @Prop({ required: true }) 
  roomNumber: string;

  @Prop({ required: true }) 
  checkInDate: Date;

  @Prop({ required: true }) 
  checkOutDate: Date;

  @Prop({ default: 'booked' }) 
  status: string; // booked | checked-in | checked-out

  @Prop({ required: true }) 
  tenantId: string;  // For multi-tenant support
}

export const RoomBookingSchema = SchemaFactory.createForClass(RoomBooking);
