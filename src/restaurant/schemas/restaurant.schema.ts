import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema({ timestamps: true })
export class Restaurant {
  @Prop({ required: true })
  tenantId: string;

  @Prop({ required: true })
  hotelId: string;

  @Prop({ required: true })
  tableNumber: string;

  @Prop({
    type: [
      {
        itemId: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  })
  orderItems: { itemId: string; quantity: number }[];

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ enum: ['pending', 'served', 'cancelled'], default: 'pending' })
  orderStatus: 'pending' | 'served' | 'cancelled';

  @Prop()
  guestId?: string;

  @Prop()
  bookedBy?: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
