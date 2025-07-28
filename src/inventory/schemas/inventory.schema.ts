import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type InventryDOcument = Inventory & Document
@Schema({ timestamps: true })
export class Inventory{
  @Prop({ required: true })
  tenantId: string;

  @Prop({ required: true })
  hotelId: string;

  @Prop({ required: true })
  itemName: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  unit: string; // kg, pcs

  @Prop({ required: true })
  reorderLevel: number;

  @Prop()
  supplierName: string;

  @Prop()
  lastRestocked: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
