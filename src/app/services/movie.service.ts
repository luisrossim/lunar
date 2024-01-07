import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  urlInit = "https://www.omdbapi.com/?apikey=e8db2703&s=The+Walking+Dead"
  urlByID = "https://www.omdbapi.com/?apikey=e8db2703&i="

  
  constructor(
    private http: HttpClient
  ) { }


  getInitMovies(): Observable<Search> {
    return this.http.get<Search>(this.urlInit);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.urlByID}${id}`);
  }
}
