import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { types } from '../../model/search';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.scss'
})
export class MovieFilterComponent {
  @Output() onFiltered = new EventEmitter();
  filteredResults: Location[] = [];
  formFilter!: FormGroup;
  types: any[] = types
  movies: Movie[] = []

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService
    ) { }


  ngOnInit(): void {
    this.formFilter = this.formBuilder.group({
      name: [null],
      year: '',
      type: ''
    })
  }

  onSubmit(): void {
    let _name = '&s=' + this.formFilter.controls['name'].value
    let _year = ''
    let _type = ''

    if(this.formFilter.controls['year'].value != '') {
      _year = '&y=' + this.formFilter.controls['year'].value
    }

    if(this.formFilter.controls['type'].value != '') {
      const type = this.formFilter.controls['type'].value
      _type = '&type=' + type.name
    }

    this.movieService.getMoviesBySearch(_name,_year,_type).subscribe({
      next: (resp) => {
        this.movies = resp.Search!
      },
      error: (error) => {
        console.log(error)
      }
    });

    this.onFiltered.emit(this.movies);
  }

  onClean(): void {
    this.formFilter.reset();
  }
}
