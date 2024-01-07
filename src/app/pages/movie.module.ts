import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
