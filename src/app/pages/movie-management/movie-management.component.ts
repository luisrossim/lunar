import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-management',
  templateUrl: './movie-management.component.html',
  styleUrl: './movie-management.component.scss'
})
export class MovieManagementComponent {
  showList = new BehaviorSubject(false);
  unitsList: Movie[] = [];

  constructor(private movieService: MovieService){ }

  ngOnInit() {
  
  }

  showListComp(movies: Movie[]){
    this.unitsList = movies
    this.showList.next(true);
  }
}
