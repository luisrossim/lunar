import { Component } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { SpacetoplusService } from '../../shared/utils/spacetoplus.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  initMovies: Movie[] = []
  bestMovie: Movie = {}
  responsiveOptions: any[] | undefined;
  loading: boolean = true


  constructor(
    private movieService: MovieService,
    private spaceToPlusService: SpacetoplusService,
    private utilities: UtilitiesService
  ) {}


  ngOnInit(): void {
    this.fetchInitMovies();
    this.fetchBestMovie();
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
  }


  private fetchBestMovie() {
    const temp_best_name = 'The Last Of Us';
    const best_movie = this.spaceToPlusService.spaceToPlus(temp_best_name);
    this.movieService.getMovieByName(best_movie).subscribe({
      next: (resp) => {
        this.bestMovie = resp
      },
      error: (error) => {
        console.log(error)
      }
    });
  }


  timeOut() {
     setTimeout(() => {
       this.loading = false
    }, 700)
  }

  get onLoading() {
    return this.utilities.getLoading;
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
