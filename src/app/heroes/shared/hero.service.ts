import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';


@Injectable()
export class HeroService {
  private headers = new Headers({'Content-Type': 'applicatoin/json'});
  private heroesUrl = 'api/heroes';

  constructor(
    private http: Http,
  ) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl).toPromise()
            .then(response => response.json().data as Hero[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('AN error occurred', error);
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise()
            .then(response => response.json().data as Hero)
              .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
             .toPromise().then(() => hero)
               .catch(this.handleError);
  }

}
