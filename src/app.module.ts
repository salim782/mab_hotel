import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TenantModule } from './tenant/tenant.module';
import { HotelsModule } from './hotels/hotels.module';
import { RoomBookingsModule } from './room-bookings/room-bookings.module';
import { RoomsModule } from './rooms/rooms.module';
import { BillingModule } from './billing/billing.module';
import { HousekeepingModule } from './housekeeping/housekeeping.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { NotificationsModule } from './notifications/notifications.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL!),
    AuthModule,
    UsersModule,
    TenantModule,
    RoomsModule,
    HotelsModule,
    RoomBookingsModule,
    BillingModule,
    HousekeepingModule,
    RestaurantModule,
    NotificationsModule,
    InventoryModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

