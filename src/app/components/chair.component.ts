import { Component, inject } from '@angular/core';
import { ChairService } from '../services/chair.service';

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

  getChairDescription(): string {
    return this.chairService.display();
  }

  getChairArea(): number {
    return this.chairService.calculateArea();
  }

  isChairLightweight(): string {
    return this.chairService.isLightweight(10) ? 'Yes' : 'No';
  }
}