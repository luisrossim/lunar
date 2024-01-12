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
  filters: any

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
    this.filters = {
      name: '&s=' + this.formFilter.controls['name'].value,
      year: '',
      type: ''
    }

    if(this.formFilter.controls['year'].value != '' && this.formFilter.controls['year'].value != null) {
      this.filters.year = '&y=' + this.formFilter.controls['year'].value
    }

    if(this.formFilter.controls['type'].value != '' && this.formFilter.controls['type'].value != null) {
      const type = this.formFilter.controls['type'].value
      this.filters.type = '&type=' + type.name
    }

    this.onFiltered.emit(this.filters);
  }

  onClean(): void {
    this.formFilter.reset();
  }
}
