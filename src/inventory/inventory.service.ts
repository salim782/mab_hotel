import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Inventory, InventryDOcument } from './schemas/inventory.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class InventoryService {
  constructor(@InjectModel(Inventory.name)private model:Model<InventryDOcument>){}
  async create(createInventoryDto: CreateInventoryDto) {
    return await this.model.create(createInventoryDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: number) {
    return await this.model.findById(id);
  }

  async update(id: string, updateInventoryDto: UpdateInventoryDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),UpdateInventoryDto,{new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
