import { Component, inject } from '@angular/core';
import { ChairService } from '../services/chair.service';
import { Chair } from '../services/chair.service';

@Component({
  selector: 'app-chair',
  standalone: true,
  template: `
    <div>
      <h2>{{ getChairDescription() }}</h2>
      <p>Area: {{ getChairArea() }} cm²</p>
      <p>Lightweight: {{ isChairLightweight() }}</p>
    </div>
  `
})

export class ChairComponent {
  private chairService = inject(ChairService);
  private chair: Chair;

  constructor() {
    this.chair = this.chairService.createChair(
      'Modern',
      'Plastic',
      true,
      'White',
      85,
      45,
      10
    );
  }

  getChairDescription(): string {
    return this.chair.display();
  }

  getChairArea(): number {
    return this.chair.calculateArea();
  }

  isChairLightweight(): string {
    return this.chair.isLightweight(10) ? 'Yes' : 'No';
  }
}