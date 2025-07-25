import { Module } from '@nestjs/common';
import { RoomBookingsService } from './room-bookings.service';
import { RoomBookingsController } from './room-bookings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomBooking, RoomBookingSchema } from './schemas/room-booking.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:RoomBooking.name,schema:RoomBookingSchema}])],
  controllers: [RoomBookingsController],
  providers: [RoomBookingsService],
})
export class RoomBookingsModule {}
