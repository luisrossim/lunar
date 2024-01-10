import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  movie: Movie = {}

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    const movieId: string = this.route.snapshot.paramMap.get('imdbID')!;
    this.fetchMovie(movieId);
  }

  private fetchMovie(id: string): void {
    this.movieService.getMovieById(id).subscribe({
      next: (resp) => {
        this.movie = resp
      },
      error: (error) => {
        console.log(error),
        this.router.navigateByUrl('');
      }
    });
  }
}
