import { Injectable } from '@nestjs/common';
import { CreateRoomBookingDto } from './dto/create-room-booking.dto';
import { UpdateRoomBookingDto } from './dto/update-room-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RoomBooking, RoomBookingDocument } from './schemas/room-booking.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class RoomBookingsService {
  constructor(@InjectModel(RoomBooking.name)private model:Model<RoomBookingDocument>){}
  
  async create(createRoomBookingDto: CreateRoomBookingDto) {
    return await this.model.create();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateRoomBookingDto: UpdateRoomBookingDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),updateRoomBookingDto, {new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
