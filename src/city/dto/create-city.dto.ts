import { ApiProperty } from "@nestjs/swagger";

export class CreateCityDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  state: string; // stateId
}
