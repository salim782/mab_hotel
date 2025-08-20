import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { State } from './schemas/state.schema';
import { CreateStateDto } from './dto/create-state.dto';

@Injectable()
export class StateService {
  constructor(@InjectModel(State.name) private model: Model<State>) {}

  async create(dto: CreateStateDto) {
    return await this.model.create(dto);
  }

  async findByCountry(countryId: string) {
    return await this.model.find({ country: countryId });
  }
}
