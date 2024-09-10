import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb+srv://felhacking:93wfSUVJb8ZLvwYA@cluster0.74slq.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
