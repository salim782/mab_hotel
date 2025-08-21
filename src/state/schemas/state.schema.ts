import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Country } from '../../country/schemas/country.schema';

@Schema({ timestamps: true })
export class State extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: Country.name, required: true })
  country: Types.ObjectId; // Foreign key to Country
}

export const StateSchema = SchemaFactory.createForClass(State);
