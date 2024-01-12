import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  api = "https://www.omdbapi.com/?apikey=e8db2703"
  
  constructor(
    private http: HttpClient
  ) { }


  getInitMovies(): Observable<Search> {
    return this.http.get<Search>(`${this.api}&s=The+Walking+Dead`);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.api}&i=${id}`);
  }

  getMovieByName(name: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.api}&t=${name}`);
  }

  getMoviesBySearch(name: string, year: string, type: string): Observable<Search> {
    return this.http.get<Search>(`${this.api}${name}${year}${type}`);
  }
}
