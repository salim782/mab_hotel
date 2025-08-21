import { Controller, Get, Param } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  // GET /states/:countryId
  @Get(':countryId')
  async getStatesByCountry(@Param('countryId') countryId: string) {
    return this.stateService.findAllByCountryId(countryId);
  }
}
