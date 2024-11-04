import { Component, inject } from '@angular/core';
import { CoffeeTableService } from '../services/coffee-table.service';

@Component({
  selector: 'app-coffee-table',
  standalone: true,
  template: `
    <div>
      <h2>{{ coffeeTableService.display() }}</h2>
      <p>Surface Area: {{ coffeeTableService.calculateSurfaceArea() }}</p>
      <p>Easy to Move: {{ coffeeTableService.isEasyToMove(15) ? 'Yes' : 'No' }}</p>
    </div>
  `
})
export class CoffeeTableComponent {
  coffeeTableService = inject(CoffeeTableService);
}