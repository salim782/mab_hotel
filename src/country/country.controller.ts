import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }
}
