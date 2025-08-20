import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { State } from "./state.schema";

export type CityDocument = City & Document;

@Schema({ timestamps: true })
export class City {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ type: Types.ObjectId, ref: State.name, required: true })
  state: Types.ObjectId;
}

export const CitySchema = SchemaFactory.createForClass(City);
