import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroService } from './heroes/shared/hero.service';
import { ZeroPaddingPipe } from './shared/zero-padding.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    HeroListComponent,
    ZeroPaddingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
