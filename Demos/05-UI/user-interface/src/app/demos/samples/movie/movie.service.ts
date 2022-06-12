import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [];

  constructor() {}

  getMovies(itemCount: number = 8): Movie[] {
    console.log('using: getMedia()');
    console.log('reset media$');
    this.movies = [];

    // let movieGenerator = MovieGenerator(itemCount);

    for (let i = 0; i < itemCount; i++) {
      this.movies.push({ title: `Movie ${i}` } as Movie);
    }

    return this.movies;
  }
}
