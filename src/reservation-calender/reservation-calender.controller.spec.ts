import { Test, TestingModule } from '@nestjs/testing';
import { ReservationCalenderController } from './reservation-calender.controller';
import { ReservationCalenderService } from './reservation-calender.service';

describe('ReservationCalenderController', () => {
  let controller: ReservationCalenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationCalenderController],
      providers: [ReservationCalenderService],
    }).compile();

    controller = module.get<ReservationCalenderController>(ReservationCalenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
