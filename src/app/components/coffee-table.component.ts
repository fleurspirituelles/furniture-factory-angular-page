import { Component, inject } from '@angular/core';
import { CoffeeTableService } from '../services/coffee-table.service';

@Component({
  selector: 'app-coffee-table',
  standalone: true,
  template: `
    <div>
      <h2>{{ getCoffeeTableDescription() }}</h2>
      <p>Surface Area: {{ getSurfaceArea() }} cm²</p>
      <p>Easy to Move: {{ isEasyToMove() }}</p>
    </div>
  `
})
export class CoffeeTableComponent {
  private coffeeTableService = inject(CoffeeTableService);

  getCoffeeTableDescription(): string {
    return this.coffeeTableService.display();
  }

  getSurfaceArea(): number {
    return this.coffeeTableService.calculateSurfaceArea();
  }

  isEasyToMove(): string {
    return this.coffeeTableService.isEasyToMove(15) ? 'Yes' : 'No';
  }
}