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
    const filters = {
      name: this.formFilter.controls['name'].value ? '&s=' + this.formFilter.controls['name'].value : '',
      year: this.formFilter.controls['year'].value ? '&y=' + this.formFilter.controls['year'].value : '',
      type: this.formFilter.controls['type'].value?.name ? '&type=' + this.formFilter.controls['type'].value.name : '',
    };
  
    this.onFiltered.emit(filters);
  }

  onClean(): void {
    this.formFilter.reset();
  }
}
