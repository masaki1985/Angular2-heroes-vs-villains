import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Hero } from './hero';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: Http,
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl).map(response => response.json().data as Hero[]);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).map(response => response.json().data as Hero);
  }

}
