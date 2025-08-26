import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateNewReservationDto } from './dto/create-new-reservation.dto';
import { UpdateNewReservationDto } from './dto/update-new-reservation.dto';
import { NewReservation } from './schemas/new-reservation.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NewReservationService {
  constructor(@InjectModel(NewReservation.name)private model:Model<NewReservation>){}

async create(dto: CreateNewReservationDto, user: any) {
  if (!user) {
    throw new UnauthorizedException('User not found in request');
  }

    const reservation = new this.model({
    ...dto,
    bookedBy: user.role,     
  });

  const saved = await reservation.save();  

   // 👇 yahan populate kar do
  return this.model.findById(saved._id)
    .populate('country', 'name code -_id')
    .populate('state', 'name isocode -_id')
    .populate('city', 'name -_id')
    .exec();
}


  // async findAll() {
  //   return await this.model.find();
  // }
  async findAll(){
    return this.model.find()
    .populate('country','name code')
    .populate('state', 'name isocode')
    .populate('city','name')
    .exec();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateNewReservationDto: UpdateNewReservationDto) {
    return await this.model.findByIdAndUpdate(new Types.ObjectId(id),updateNewReservationDto,{new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
