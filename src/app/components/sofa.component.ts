import { Component, inject } from '@angular/core';
import { SofaService } from '../services/sofa.service';

@Component({
  selector: 'app-sofa',
  standalone: true,
  template: `
    <div>
      <h2>{{ sofaService.display() }}</h2>
      <p>Volume: {{ sofaService.calculateVolume() }}</p>
      <p>Heavy: {{ sofaService.isHeavy(20) ? 'Yes' : 'No' }}</p>
    </div>
  `
})
export class SofaComponent {
  sofaService = inject(SofaService);
}