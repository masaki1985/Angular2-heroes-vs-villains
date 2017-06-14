import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../shared/hero';
import { HeroService } from './../shared/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes/hero', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {this.heroes.push(hero);
      this.selectedHero = null;
    })
  }

}
