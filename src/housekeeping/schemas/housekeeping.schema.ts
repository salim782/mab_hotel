import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HousekeepingDocument = Housekeeping & Document;

@Schema({ timestamps: true })
export class Housekeeping {
  @Prop({ required: true })
  hotelId: string;

  @Prop({ required: true })
  roomId: string;

  @Prop({ required: true })
  staffId: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ enum: ['scheduled', 'in-progress', 'done'], default: 'scheduled' })
  status: 'scheduled' | 'in-progress' | 'done';

  @Prop()
  notes: string;
}

export const HousekeepingSchema = SchemaFactory.createForClass(Housekeeping);
