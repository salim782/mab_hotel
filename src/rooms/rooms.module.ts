import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantSchema } from 'src/tenant/schemas/tenant.schemas';
import { Rooms } from './schemas/rooms.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:Rooms.name,schema:TenantSchema}])],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
