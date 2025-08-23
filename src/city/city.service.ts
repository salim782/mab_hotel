// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Country } from '../country/schemas/country.schema';
// import { State as StateCSC, City } from 'country-state-city';

// @Injectable()
// export class CityService {
//   constructor(@InjectModel(Country.name) private countryModel: Model<Country>) {}

//   async findAllByState(countryCode: string, stateCode: string) {
//     const cities = City.getCitiesOfState(countryCode, stateCode);

//     if (!cities || cities.length === 0) {
//       return { message: `No cities found for ${countryCode}-${stateCode}` };
//     }

//     return cities;
//   }
// }


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../country/schemas/country.schema';
import { City } from 'country-state-city';

@Injectable()
export class CityService {
  constructor(@InjectModel(Country.name) private countryModel: Model<Country>) {}

  // ✅ Get cities by countryId + stateCode
  async findAllByState(countryId: string, stateCode: string) {
    // 1️⃣ Country find करो by _id
    const country = await this.countryModel.findById(countryId).exec();
    if (!country) {
      throw new NotFoundException('Country not found');
    }

    // 2️⃣ country-state-city से cities निकालो
    const cities = City.getCitiesOfState(country.code, stateCode);

    if (!cities || cities.length === 0) {
      return { message: `No cities found for ${country.code}-${stateCode}` };
    }

    return cities;
  }
}

