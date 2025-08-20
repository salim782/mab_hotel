import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  create(@Body() dto: CreateStateDto) {
    return this.stateService.create(dto);
  }

  @Get(':countryId')
  findByCountry(@Param('countryId') countryId: string) {
    return this.stateService.findByCountry(countryId);
  }
}
