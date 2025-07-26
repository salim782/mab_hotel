import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { OrderItemDto } from "./order-item.dto";
// import { OrderItemDto } from './order-item.dto';

export class CreateRestaurantDto {
     @IsString()
  tenantId: string;

  @IsString()
  hotelId: string;

  @IsString()
  tableNumber: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  orderItems: OrderItemDto[];

  @IsNumber()
  totalAmount: number;

  @IsEnum(['pending', 'served', 'cancelled'])
  orderStatus: 'pending' | 'served' | 'cancelled';

  @IsOptional()
  @IsString()
  guestId?: string;

  @IsOptional()
  @IsString()
  bookedBy?: string;
}
