import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomBookingsService } from './room-bookings.service';
import { CreateRoomBookingDto } from './dto/create-room-booking.dto';
import { UpdateRoomBookingDto } from './dto/update-room-booking.dto';

@Controller('room-bookings')
export class RoomBookingsController {
  constructor(private readonly roomBookingsService: RoomBookingsService) {}

  @Post()
  create(@Body() createRoomBookingDto: CreateRoomBookingDto) {
    return this.roomBookingsService.create(createRoomBookingDto);
  }

  @Get()
  findAll() {
    return this.roomBookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomBookingsService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRoomBookingDto: UpdateRoomBookingDto) {
  //   return this.roomBookingsService.update(id, updateRoomBookingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.roomBookingsService.remove(id);
  // }
}
