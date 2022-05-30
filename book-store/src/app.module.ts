import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './routes/v1/v1.module';

@Module({
  imports: [V1Module, MongooseModule.forRoot("mongodb://localhost:27017/bookstore")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
