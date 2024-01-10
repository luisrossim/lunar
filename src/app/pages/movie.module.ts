import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SharedModule } from '../shared/shared.module';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieManagementComponent } from './movie-management/movie-management.component';


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    MovieFilterComponent,
    MovieListComponent,
    MovieManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
