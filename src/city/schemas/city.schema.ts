import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'State', required: true })
  state: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
