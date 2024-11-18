import { Component, inject } from '@angular/core';
import { CoffeeTableService } from '../services/coffee-table.service';
import { CoffeeTable } from '../services/coffee-table.service'; // Importa a classe CoffeeTable

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
  private coffeeTable: CoffeeTable;

  constructor() {
    this.coffeeTable = this.coffeeTableService.createCoffeeTable(
      'Modern',
      'Glass',
      'Round',
      'Transparent',
      100,
      20
    );
  }

  getCoffeeTableDescription(): string {
    return this.coffeeTable.display();
  }

  getSurfaceArea(): number {
    return this.coffeeTable.calculateSurfaceArea();
  }

  isEasyToMove(): string {
    return this.coffeeTable.isEasyToMove(25) ? 'Yes' : 'No';
  }
}