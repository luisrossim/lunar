import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly url_init = "http://www.omdbapi.com/?apikey=e8db2703&s=The+Walking+Dead"

  
  constructor(
    private http: HttpClient
  ) { }


  getInitMovies(): Observable<Search> {
    return this.http.get<Search>(this.url_init);
  }

}
