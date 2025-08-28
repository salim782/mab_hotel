import { Injectable } from '@nestjs/common';
import { CreateReservationCalenderDto } from './dto/create-reservation-calender.dto';
import { UpdateReservationCalenderDto } from './dto/update-reservation-calender.dto';
import { ReservationCalender } from './schemas/reservation-calender.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class ReservationCalenderService {
  constructor(@InjectModel(ReservationCalender.name)private model:Model<ReservationCalender>){}

  async create(createReservationCalenderDto: CreateReservationCalenderDto) {
    return await this.model.create(createReservationCalenderDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateReservationCalenderDto: UpdateReservationCalenderDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),updateReservationCalenderDto,{new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
