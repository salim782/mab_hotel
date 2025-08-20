import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './schemas/city.schema';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(@InjectModel(City.name) private model: Model<City>) {}

  async create(dto: CreateCityDto) {
    return await this.model.create(dto);
  }

  async findByState(stateId: string) {
    return await this.model.find({ state: stateId });
  }
}
