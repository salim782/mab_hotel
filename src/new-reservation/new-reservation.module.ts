import { Module } from '@nestjs/common';
import { NewReservationService } from './new-reservation.service';
import { NewReservationController } from './new-reservation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NewReservation, NewReservationSchemas } from './schemas/new-reservation.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:NewReservation.name,schema:NewReservationSchemas}])],
  controllers: [NewReservationController],
  providers: [NewReservationService],
})
export class NewReservationModule {}
