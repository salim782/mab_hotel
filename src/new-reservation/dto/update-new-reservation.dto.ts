import { PartialType } from '@nestjs/swagger';
import { CreateNewReservationDto } from './create-new-reservation.dto';

export class UpdateNewReservationDto extends PartialType(CreateNewReservationDto) {}
