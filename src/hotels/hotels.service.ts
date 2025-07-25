import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel, HotelDocument } from './schemas/hotel.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name)private model:Model<HotelDocument>){}

  async create(createHotelDto: CreateHotelDto) {
    return await this.model.create(createHotelDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateHotelDto: UpdateHotelDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),updateHotelDto,{new: true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
