import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from './schemas/country.schema';
import { countries } from 'countries-list';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  async findAll(): Promise<Country[]> {
    return this.countryModel.find().sort({ name: 1 }).exec(); // A-Z order
  }

  async seedCountries() {
    // package se sab countries fetch karna
    const countryArray = Object.entries(countries).map(([code, data]: any) => ({
      name: data.name,
      code: code,
    }));
    // pehle clear kar do (agar duplicate na ho)
    await this.countryModel.deleteMany({});

    // insert all countries
    await this.countryModel.insertMany(countryArray);

    return { message: 'All countries seeded successfully!' };
}
}