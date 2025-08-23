// import { Controller, Get, Param } from '@nestjs/common';
// import { CityService } from './city.service';

// @Controller('cities')
// export class CityController {
//   constructor(private readonly cityService: CityService) {}

//   // ✅ Get all cities of a state (by countryId + stateCode)
//   @Get(':countryCode/:stateCode')
//   async getCitiesByState(
//     @Param('countryCode') countryCode: string,
//     @Param('stateCode') stateCode: string,
//   ) {
//     return this.cityService.findAllByState(countryCode, stateCode);
//   }
// }

import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  // ✅ Get all cities of a state (by countryId + stateCode)
  @Get(':countryId/:stateCode')
  async getCitiesByState(
    @Param('countryId') countryId: string,
    @Param('stateCode') stateCode: string,
  ) {
    return this.cityService.findAllByState(countryId, stateCode);
  }
}

