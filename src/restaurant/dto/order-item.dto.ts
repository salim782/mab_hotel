import { IsString, IsNumber } from 'class-validator';

export class OrderItemDto {
  @IsString()
  itemName: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
