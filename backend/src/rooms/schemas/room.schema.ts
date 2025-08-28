import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop({ required: true })
  tenantId: string;

  @Prop({ required: true })
  hotelId: string;

  @Prop({ required: true })
  roomNumber: string;

  @Prop({ required: true })
  type: string; // suite, deluxe, etc.

  @Prop({ required: true })
  capacity: number;

  @Prop({ required: true })
  pricePerNight: number;

  @Prop({ default: true })
  isAvailable: boolean;

  @Prop({ type: [String], default: [] })
  features: string[];

  @Prop({ enum: ['available', 'booked', 'maintenance'], default: 'available' })
  status: 'available' | 'booked' | 'maintenance';
}

export const RoomSchema = SchemaFactory.createForClass(Room);
