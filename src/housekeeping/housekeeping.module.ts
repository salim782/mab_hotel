import { Module } from '@nestjs/common';
import { HousekeepingService } from './housekeeping.service';
import { HousekeepingController } from './housekeeping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Housekeeping, HousekeepingSchema } from './schemas/housekeeping.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Housekeeping.name,schema:HousekeepingSchema}])],
  controllers: [HousekeepingController],
  providers: [HousekeepingService],
})
export class HousekeepingModule {}
