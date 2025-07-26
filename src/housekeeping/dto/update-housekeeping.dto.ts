import { PartialType } from '@nestjs/swagger';
import { CreateHousekeepingDto } from './create-housekeeping.dto';

export class UpdateHousekeepingDto extends PartialType(CreateHousekeepingDto) {}
