import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../country/schemas/country.schema';
import { State as StateCSC, City } from 'country-state-city';

@Injectable()
export class CityService {
  constructor(@InjectModel(Country.name) private countryModel: Model<Country>) {}

  async findAllByState(countryId: string, stateCode: string) {
    // DB से country निकालो
    const country = await this.countryModel.findById(countryId);
    if (!country) {
      throw new Error('Country not found');
    }

    // अब cities निकालो उस state की (country.code aur state.code se)
    return City.getCitiesOfState(country.code, stateCode);
  }
}
