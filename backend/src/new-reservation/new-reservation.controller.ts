import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Req } from '@nestjs/common';
import { NewReservationService } from './new-reservation.service';
import { CreateNewReservationDto } from './dto/create-new-reservation.dto';
import { UpdateNewReservationDto } from './dto/update-new-reservation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('new-reservation')
export class NewReservationController {
  constructor(private readonly newReservationService: NewReservationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))

  async create(@Body() dto: CreateNewReservationDto, @Req() req) {
    return this.newReservationService.create(dto, req.user);
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
