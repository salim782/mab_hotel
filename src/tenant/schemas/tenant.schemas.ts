import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TenantDocument = Tenant & Document;

@Schema({ timestamps: true })
export class Tenant {
  @Prop({ required: true, unique: true }) 
  name: string;

  @Prop({ required: true, unique: true }) 
  slug: string;

  @Prop() 
  address: string;

  @Prop() 
  contactEmail: string;

  @Prop() 
  contactPhone: string;

  @Prop() 
  ownerId: string; // Optional: links to User
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
