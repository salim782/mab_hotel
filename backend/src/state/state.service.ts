import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../country/schemas/country.schema';
import { State } from 'country-state-city';

@Injectable()
export class StateService {
  constructor(@InjectModel(Country.name) private countryModel: Model<Country>) {}

  async findAllByCountryId(countryId: string) {
    // DB से country निकालो
    const country = await this.countryModel.findById(countryId);
    if (!country) {
      throw new Error('Country not found');
    }

    // उस country का ISO code use करके states निकालो
    return State.getStatesOfCountry(country.code); // e.g. "IN"
  }
}
