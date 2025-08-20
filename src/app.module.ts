import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { NewReservationModule } from './new-reservation/new-reservation.module';
import { ReservationBookingDetailsModule } from './reservation-booking-details/reservation-booking-details.module';
import { ReservationCalenderModule } from './reservation-calender/reservation-calender.module';
// import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from './common/roles.guard';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL!),
    AuthModule,
    UsersModule,
    RoomsModule,
    NewReservationModule,
    ReservationBookingDetailsModule,
    ReservationCalenderModule,
    CountryModule
    ],
  controllers: [AppController],
  providers: [AppService],
  // providers: [
  //   { provide: APP_GUARD, useClass: JwtAuthGuard },
  //   { provide: APP_GUARD, useClass: RolesGuard },
  // ],
})
export class AppModule {}

