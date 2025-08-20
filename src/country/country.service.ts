import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from './schemas/country.schema';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country.name) private model: Model<Country>) {}

  async create(dto: CreateCountryDto) {
    return await this.model.create(dto);
  }

  async findAll() {
    return await this.model.find();
  }
}
