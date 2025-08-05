import { PartialType } from '@nestjs/swagger';
import { CreateReservationCalenderDto } from './create-reservation-calender.dto';

export class UpdateReservationCalenderDto extends PartialType(CreateReservationCalenderDto) {}
