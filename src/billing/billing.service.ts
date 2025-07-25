import { Injectable } from '@nestjs/common';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Billing, BillingDocument } from './schemas/billing.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class BillingService {
  constructor(@InjectModel(Billing.name)private model:Model<BillingDocument>){}

  async create(createBillingDto: CreateBillingDto) {
    return await this.model.create(createBillingDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateBillingDto: UpdateBillingDto) {
    // return await this.model.findByIdAndUpdate(new Types.ObjectId(id,UpdateBillingDto,{new:true}));
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),UpdateBillingDto,{new :true})
  }

 async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
