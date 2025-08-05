import { Test, TestingModule } from '@nestjs/testing';
import { ReservationCalenderService } from './reservation-calender.service';

describe('ReservationCalenderService', () => {
  let service: ReservationCalenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationCalenderService],
    }).compile();

    service = module.get<ReservationCalenderService>(ReservationCalenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
