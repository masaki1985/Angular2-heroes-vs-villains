import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Hero } from './hero';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

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

  update(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers}).map(() => hero);
  }

  create(name: string): Observable<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json().data as Hero)
  }
}
