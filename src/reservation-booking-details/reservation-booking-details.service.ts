import { Injectable } from '@nestjs/common';
import { CreateReservationBookingDetailDto } from './dto/create-reservation-booking-detail.dto';
import { UpdateReservationBookingDetailDto } from './dto/update-reservation-booking-detail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationBookingDetail } from './schemas/reservation-booking-details.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class ReservationBookingDetailsService {
  constructor(@InjectModel(ReservationBookingDetail.name)private model:Model<ReservationBookingDetail>){}

  async create(createReservationBookingDetailDto: CreateReservationBookingDetailDto) {
    return await this.model.create(createReservationBookingDetailDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateReservationBookingDetailDto: UpdateReservationBookingDetailDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),updateReservationBookingDetailDto,{new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
