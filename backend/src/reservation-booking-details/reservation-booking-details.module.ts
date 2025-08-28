import { Module } from '@nestjs/common';
import { ReservationBookingDetailsService } from './reservation-booking-details.service';
import { ReservationBookingDetailsController } from './reservation-booking-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationBookingDetail, ReservationBookingDetailSchemas } from './schemas/reservation-booking-details.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:ReservationBookingDetail.name,schema:ReservationBookingDetailSchemas}])],
  controllers: [ReservationBookingDetailsController],
  providers: [ReservationBookingDetailsService],
})
export class ReservationBookingDetailsModule {}
