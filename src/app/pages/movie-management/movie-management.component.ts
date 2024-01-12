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

  showListComp(filters: any){
    this.movieService.getMoviesBySearch(filters).subscribe({
      next: (resp) => {
        this.unitsList = resp.Search!
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.showList.next(true);
  }
}
