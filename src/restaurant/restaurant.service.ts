import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant, RestaurantDocument } from './schemas/restaurant.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel(Restaurant.name)private model:Model<RestaurantDocument>){}

  async create(createRestaurantDto: CreateRestaurantDto) {
    return await this.model.create(createRestaurantDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return this.model.findByIdAndUpdate(new Types.ObjectId(id),UpdateRestaurantDto,{new:true})
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
