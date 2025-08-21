import { Controller, Get, Post } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}


  @Get('seed')
  async seed() {
    return this.countryService.seedCountries();
  }

  
  @Get()
  async getAllCountries() {
    return this.countryService.findAll();
  }
  // @Post('seed') 
  // async seed() { 
  //   return this.countryService.seedCountries(); 
  // }
}
