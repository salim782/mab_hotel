import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateInventoryDto {
  @ApiProperty() 
  @IsString() 
  tenantId: string;

  @ApiProperty()
  @IsString()
  hotelId: string;

  @ApiProperty()
  @IsString()
  itemName: string;


  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsString()
  unit: string;

  @ApiProperty()
  @IsNumber()
  reorderLevel: number;

  @ApiProperty()
  @IsString()
  supplierName?: string;

  @ApiProperty()
  @IsDate()
  lastRestocked?: Date;
}
