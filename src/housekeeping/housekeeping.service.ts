import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHousekeepingDto } from './dto/create-housekeeping.dto';
import { UpdateHousekeepingDto } from './dto/update-housekeeping.dto';
import { Housekeeping, HousekeepingDocument } from './schemas/housekeeping.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HousekeepingService {
  constructor(@InjectModel(Housekeeping.name)private model:Model<HousekeepingDocument>){}

  async create(createHousekeepingDto: CreateHousekeepingDto) {
    return await this.model.create(createHousekeepingDto);
  }

  async findAll() {
    return await this.model.find() ;
  }

  async findOne(id: string) {
    const item = await this.model.findById(id);
    if(!item)throw new NotFoundException('Schedule not found');
    return item;
  }

  async update(id: string, updateHousekeepingDto: UpdateHousekeepingDto) {
    const updated = await this.model.findByIdAndUpdate(new Types.ObjectId(id),UpdateHousekeepingDto,{new:true});
    if(!updated)throw new NotFoundException('Schedule not found');
    return updated;

  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
