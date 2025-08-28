import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationCalenderService } from './reservation-calender.service';
import { CreateReservationCalenderDto } from './dto/create-reservation-calender.dto';
import { UpdateReservationCalenderDto } from './dto/update-reservation-calender.dto';

@Controller('reservation-calender')
export class ReservationCalenderController {
  constructor(private readonly reservationCalenderService: ReservationCalenderService) {}

  @Post()
  create(@Body() createReservationCalenderDto: CreateReservationCalenderDto) {
    return this.reservationCalenderService.create(createReservationCalenderDto);
  }

  @Get()
  findAll() {
    return this.reservationCalenderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationCalenderService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationCalenderDto: UpdateReservationCalenderDto) {
    return this.reservationCalenderService.update(id, updateReservationCalenderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationCalenderService.remove(id);
  }
}
