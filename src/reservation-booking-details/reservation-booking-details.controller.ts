import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationBookingDetailsService } from './reservation-booking-details.service';
import { CreateReservationBookingDetailDto } from './dto/create-reservation-booking-detail.dto';
import { UpdateReservationBookingDetailDto } from './dto/update-reservation-booking-detail.dto';

@Controller('reservation-booking-details')
export class ReservationBookingDetailsController {
  constructor(private readonly reservationBookingDetailsService: ReservationBookingDetailsService) {}

  @Post()
  create(@Body() createReservationBookingDetailDto: CreateReservationBookingDetailDto) {
    return this.reservationBookingDetailsService.create(createReservationBookingDetailDto);
  }

  @Get()
  findAll() {
    return this.reservationBookingDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationBookingDetailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationBookingDetailDto: UpdateReservationBookingDetailDto) {
    return this.reservationBookingDetailsService.update(id, updateReservationBookingDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationBookingDetailsService.remove(id);
  }
}
