import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BatmanService } from './batman.service';

@Controller('batman')
export class BatmanController {
  constructor(private readonly batmanService: BatmanService) {}

  @Get()
  getMovies() {
    return this.batmanService.getAllMovies();
  }

  @Post()
  addMovie(@Body('title') title: string, @Body('year') year: number) {
    return this.batmanService.addMovie(title, year);
  }

  @Get(':id')
  getMovieById(@Param('id') id: number) {
    return this.batmanService.getMovieById(id);
  }

  @Put(':id')
  updateMovie(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('year') year: number,
  ) {
    return this.batmanService.updateMovie(id, title, year);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number) {
    return this.batmanService.deleteMovie(id);
  }
}
