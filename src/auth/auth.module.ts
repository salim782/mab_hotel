import { Inject, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { usersSchema } from 'src/users/schemas/users.schemas';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from 'src/common/roles.guard';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports:[
     // ServeStatic setup
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'src/auth/reset'), // jaha images hain
    //   serveRoot: '/reset', // URL prefix banega http://localhost:3001/reset
    // }),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config:ConfigService)=>{
        return {
          secret:config.get('JWT_SECRET'),
          signOptions:{
            expiresIn: config.get('JWT_EXPIRES'),
          },
        };
      },
    }),

    MongooseModule.forFeature([{name:'Users',schema: usersSchema}]),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy, RolesGuard],
  exports:[PassportModule, JwtStrategy, RolesGuard],
})
export class AuthModule {}
