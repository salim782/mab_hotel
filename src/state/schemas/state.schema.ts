import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type StateDocument = State & Document;

@Schema()
export class State {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Country', required: true })
  country: string;
}

export const StateSchema = SchemaFactory.createForClass(State);
