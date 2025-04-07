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
}
