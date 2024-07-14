import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() unitsList: Movie[] = [];
  @Input() totalResults: string = '';
}
