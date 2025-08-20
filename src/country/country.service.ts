// import { Injectable } from '@nestjs/common';
// import { CreateCountryDto } from './dto/create-country.dto';
// import { UpdateCountryDto } from './dto/update-country.dto';

// @Injectable()
// export class CountryService {
//   create(createCountryDto: CreateCountryDto) {
//     return 'This action adds a new country';
//   }

//   findAll() {
//     return `This action returns all country`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} country`;
//   }

//   update(id: number, updateCountryDto: UpdateCountryDto) {
//     return `This action updates a #${id} country`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} country`;
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Country } from './schemas/country.schema';
import { State } from './schemas/state.schema';
import { City } from './schemas/city.schema';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
    @InjectModel(State.name) private stateModel: Model<State>,
    @InjectModel(City.name) private cityModel: Model<City>,
  ) {}

  async findAll() {
    return this.countryModel.find();
  }

  async findDetails(countryId: string) {
    const country = await this.countryModel.findById(countryId);
    if (!country) return null;

    // find states of country
    const states = await this.stateModel.find({ country: new Types.ObjectId(countryId) });

    // attach cities with each state
    const statesWithCities = await Promise.all(
      states.map(async (state) => {
        const cities = await this.cityModel.find({ state: state._id });
        return {
          _id: state._id,
          name: state.name,
          cities: cities.map((c) => ({ _id: c._id, name: c.name })),
        };
      }),
    );

    return {
      _id: country._id,
      name: country.name,
      states: statesWithCities,
    };
  }
}

