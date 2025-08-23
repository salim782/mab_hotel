import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { NewReservationService } from './new-reservation.service';
import { CreateNewReservationDto } from './dto/create-new-reservation.dto';
import { UpdateNewReservationDto } from './dto/update-new-reservation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('new-reservation')
export class NewReservationController {
  constructor(private readonly newReservationService: NewReservationService) {}

  // @Post()
  // create(@Body() createNewReservationDto: CreateNewReservationDto) {
  //   return this.newReservationService.create(createNewReservationDto);
  // }
  @Post()
  @UseGuards(JwtAuthGuard) // 👈 Auth Guard से user मिलेगा
  create(@Body() createNewReservationDto: CreateNewReservationDto, @Request() req) {
    return this.newReservationService.create(createNewReservationDto, req.user);
  }

  @Get()
  findAll() {
    return this.newReservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newReservationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewReservationDto: UpdateNewReservationDto) {
    return this.newReservationService.update(id, updateNewReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newReservationService.remove(id);
  }
}
