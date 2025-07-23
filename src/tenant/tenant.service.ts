import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { Tenant, TenantDocument } from './schemas/tenant.schemas';

@Injectable()
export class TenantService {
  constructor(@InjectModel(Tenant.name) private model: Model<TenantDocument>) {}

  async create(createTenantDto: CreateTenantDto) {
    return await this.model.create(createTenantDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateTenantDto: UpdateTenantDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id), updateTenantDto, { new: true });
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
