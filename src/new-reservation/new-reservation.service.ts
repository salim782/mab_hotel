import { Injectable } from '@nestjs/common';
import { CreateNewReservationDto } from './dto/create-new-reservation.dto';
import { UpdateNewReservationDto } from './dto/update-new-reservation.dto';
import { NewReservation } from './schemas/new-reservation.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NewReservationService {
  constructor(@InjectModel(NewReservation.name)private model:Model<NewReservation>){}


  async create(createNewReservationDto: CreateNewReservationDto) {
    return await this.model.create(createNewReservationDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateNewReservationDto: UpdateNewReservationDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),UpdateNewReservationDto,{new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
