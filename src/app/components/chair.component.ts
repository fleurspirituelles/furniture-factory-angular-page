import { Component, inject } from '@angular/core';
import { ChairService } from '../services/chair.service';

@Component({
  selector: 'app-chair',
  standalone: true,
  template: `
    <div>
      <h2>{{ chairService.display() }}</h2>
      <p>Area: {{ chairService.calculateArea() }}</p>
      <p>Lightweight: {{ chairService.isLightweight(10) ? 'Yes' : 'No' }}</p>
    </div>
  `
})
export class ChairComponent {
  chairService = inject(ChairService);
}