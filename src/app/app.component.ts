import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Heroes vs. Villains';

  constructor(
    private router: Router,
  ) { }


  gotoHeroes(): void {
    this.router.navigateByUrl('/heroes/hero-list');
  }

}
