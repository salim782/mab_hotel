import { Module } from '@nestjs/common';
import { ReservationCalenderService } from './reservation-calender.service';
import { ReservationCalenderController } from './reservation-calender.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationCalender, ReservationCalenderSchemas } from './schemas/reservation-calender.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:ReservationCalender.name, schema:ReservationCalenderSchemas}])],
  controllers: [ReservationCalenderController],
  providers: [ReservationCalenderService],
})
export class ReservationCalenderModule {}
