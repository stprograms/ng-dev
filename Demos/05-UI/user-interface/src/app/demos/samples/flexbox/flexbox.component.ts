import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss'],
})
export class FlexboxComponent implements OnInit {
  movies: Movie[];
  currclass = 'flex-container';

  constructor(private ms: MovieService) {}

  ngOnInit() {
    this.movies = this.ms.getMovies();
  }

  toggleLayout() {
    this.currclass =
      this.currclass == 'flex-container'
        ? 'flex-container-col'
        : 'flex-container';
    console.log(this.currclass);
  }
}
