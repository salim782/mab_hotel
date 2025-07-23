import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rooms, RoomsDocument } from './schemas/rooms.schemas';
import { Model, Types } from 'mongoose';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Rooms.name) private model:Model<RoomsDocument>){}
 async create(createRoomDto: CreateRoomDto) {
    return await this.model.create(createRoomDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),updateRoomDto,{new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
