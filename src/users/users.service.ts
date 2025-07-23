import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/users.schemas';
import { Model, Types } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name)private model:Model<UsersDocument>){}

  async create(createUserDto: CreateUserDto) {
    return await this.model.create(createUserDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),updateUserDto,{new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
