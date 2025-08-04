import { PartialType } from '@nestjs/swagger';
import { CreateReservationBookingDetailDto } from './create-reservation-booking-detail.dto';

export class UpdateReservationBookingDetailDto extends PartialType(CreateReservationBookingDetailDto) {}
