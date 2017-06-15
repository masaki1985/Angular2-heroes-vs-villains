import { Injectable } from '@angular/core';
import { Hero } from "app/heroes/shared/hero";

@Injectable()
export class InMemoryDataService {

  constructor() { }

  createDB() {
    const HEROES: Hero[] = [
      { id: 1, name: 'Spider-Man'},
      { id: 2, name: 'Captain Marvel'},
      { id: 3, name: 'Hulk'},
      { id: 4, name: 'Thor'},
      { id: 5, name: 'Iron Man'},
      { id: 6, name: 'Luke Cage'},
      { id: 7, name: 'Black Widow'},
      { id: 8, name: 'Daredevil'},
      { id: 9, name: 'Captain America'},
      { id: 10, name: 'Wolverine'},
    ];
  }

}
