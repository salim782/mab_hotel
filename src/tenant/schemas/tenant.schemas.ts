//  Hotel Owners


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TenantDocument = Tenant & Document;

@Schema({ timestamps: true })
export class Tenant {
  @Prop({ required: true, unique: true }) 
  name: string;

  @Prop() 
  address: string;

  @Prop() 
  companyEmail: string;

  @Prop() 
  contactPhone: string;

  @Prop() 
  ownerId: string;

  @Prop({ enum: ['basic', 'pro', 'enterprise'], default: 'basic' })
  subscriptionPlan: 'basic' | 'pro' | 'enterprise';

  @Prop({ default: true })
  isActive: boolean;

}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
