import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BatmanMovie } from './batman.entity';

@Injectable()
export class BatmanService {
  constructor(
    @InjectRepository(BatmanMovie)
    private readonly movieRepo: Repository<BatmanMovie>,
  ) {}

  getAllMovies() {
    return this.movieRepo.find();
  }

  addMovie(title: string, year: number) {
    const movie = this.movieRepo.create({ title, year });
    return this.movieRepo.save(movie);
  }

  getMovieById(id: number) {
    return this.movieRepo.findOneBy({ id });
  }

  async updateMovie(id: number, title: string, year: number) {
    const movie = await this.movieRepo.findOneBy({ id });
    if (!movie) return { message: 'Movie not found' };

    movie.title = title;
    movie.year = year;
    return this.movieRepo.save(movie);
  }

  async deleteMovie(id: number) {
    const result = await this.movieRepo.delete(id);
    if (result.affected === 0) {
      return { message: 'Movie not found' };
    }
    return { message: 'Movie deleted successfully' };
  }
}
