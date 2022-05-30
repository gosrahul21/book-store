import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BookDto } from './routes/v1/book/dto/book.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("get hello world")
    return this.appService.getHello();
  }
 
  @Post()
  testBookData(@Body() bookDto : BookDto){
    console.log(bookDto)
    return bookDto;
  }

}
