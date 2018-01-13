import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Joke } from '../models/joke';
import { JokeResponse } from '../models/jokeResponse';

@Injectable()
export class JokeService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://api.icndb.com/jokes/random/';
  }

  getJokes(n: number): Observable<JokeResponse> {
    console.log('Called service');
    return this.http.get<JokeResponse>(this.url + n);
  }
}
