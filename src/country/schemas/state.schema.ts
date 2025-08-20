import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Country } from "./country.schema";

export type StateDocument = State & Document;

@Schema({ timestamps: true })
export class State {
  @Prop({ required: true , type: String})
  name: string;

  @Prop({ type: Types.ObjectId, ref: Country.name, required: true })
  country: Types.ObjectId;
}

export const StateSchema = SchemaFactory.createForClass(State);
