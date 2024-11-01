import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { NavbarComponent } from '../src/Components/NavBar/navbar.component';
import { HomeComponent } from '../src/Components/Home/home.component';
import { GamesComponent } from '../src/Components/Games/games.component';
import { GalleryComponent } from '../src/Components/Gallery/gallery.component';
import { FooterComponent } from '../src/Components/Footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    GamesComponent,
    GalleryComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-games></app-games>
    <app-gallery></app-gallery>
    <app-footer></app-footer>
  `,
})
export class App {}

bootstrapApplication(App);
