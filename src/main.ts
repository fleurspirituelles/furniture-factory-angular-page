import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChairComponent } from './app/components/chair.component';
import { CoffeeTableComponent } from './app/components/coffee-table.component';
import { SofaComponent } from './app/components/sofa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChairComponent, CoffeeTableComponent, SofaComponent],
  template: `
    <h1>Welcome to the Furniture Store!</h1>
    <app-chair></app-chair>
    <app-coffee-table></app-coffee-table>
    <app-sofa></app-sofa>
  `,
})
export class App {}

bootstrapApplication(App);