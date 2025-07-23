import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, usersSchema } from './schemas/users.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:Users.name,schema:usersSchema}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
