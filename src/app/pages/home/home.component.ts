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
  loading: boolean = true

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.fetchInitMovies();
    this.responsiveSlide();
    setTimeout(() => {
      this.loading = false
    }, 1500)
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
  }

  responsiveSlide() {
    this.responsiveOptions = [
      {
        breakpoint: '1900px',
        numVisible: 6,
        numScroll: 6
      },
      {
        breakpoint: '1600px',
        numVisible: 5,
        numScroll: 5
      },
      {
        breakpoint: '1450px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '1230px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1050px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '868px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
