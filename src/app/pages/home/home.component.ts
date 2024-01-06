import { Component } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  initMovies: Movie[] = []
  responsiveOptions: any[] | undefined;
  loading: boolean = true;

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.fetchInitMovies();
    this.responsiveSlide();
  }

  private fetchInitMovies(): void {
    this.movieService.getInitMovies().subscribe({
      next: (resp) => {
        this.initMovies = resp.Search!
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.loading = false;
  }

  responsiveSlide() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '855px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
