// import { Module } from '@nestjs/common';
// import { CountryService } from './country.service';
// import { CountryController } from './country.controller';

// @Module({
//   controllers: [CountryController],
//   providers: [CountryService],
// })
// export class CountryModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { Country, CountrySchema } from './schemas/country.schema';
import { State, StateSchema } from './schemas/state.schema';
import { City, CitySchema } from './schemas/city.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Country.name, schema: CountrySchema },
      { name: State.name, schema: StateSchema },
      { name: City.name, schema: CitySchema },
    ]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}

