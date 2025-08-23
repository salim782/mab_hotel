import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../country/schemas/country.schema';
import { State as StateCSC, City } from 'country-state-city';

@Injectable()
export class CityService {
  constructor(@InjectModel(Country.name) private countryModel: Model<Country>) {}

  // async findAllByState(countryCode: string, stateCode: string) {
  //   // DB से country निकालो
  //   const country = await this.countryModel.findById(countryCode);
  //   if (!country) {
  //     throw new Error('Country not found');
  //   }

  //   // अब cities निकालो उस state की (country.code aur state.code se)
  //   return City.getCitiesOfState(countryCode, stateCode);
  // }

  async findAllByState(countryCode: string, stateCode: string) {
    const cities = City.getCitiesOfState(countryCode, stateCode);

    if (!cities || cities.length === 0) {
      return { message: `No cities found for ${countryCode}-${stateCode}` };
    }

    return cities;
  }
}
