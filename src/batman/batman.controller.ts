import { Controller, Get, Post, Body } from '@nestjs/common';
import { BatmanService } from './batman.service';

@Controller('batman')
export class BatmanController {
  constructor(private readonly batmanService: BatmanService) {}

  @Get()
  getMovies() {
    return this.batmanService.getAllMovies();
  }

  @Post()
  addMovie(
    @Body('title') title: string,
    @Body('year') year: number,
  ) {
    return this.batmanService.addMovie(title, year);
  }
}
