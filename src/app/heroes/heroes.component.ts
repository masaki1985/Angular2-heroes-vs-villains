import { Component, OnInit } from '@angular/core';
import { HeroService } from './shared/hero.service'
import { Hero } from "app/heroes/shared/hero";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
  }
  
}
