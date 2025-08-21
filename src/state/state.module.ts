import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { State, StateSchema } from './schemas/state.schema';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { CountryModule } from 'src/country/country.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: State.name, schema: StateSchema }]),
  CountryModule],
  controllers: [StateController],
  providers: [StateService],
  exports: [StateService],
})
export class StateModule {}
