import { Component, inject } from '@angular/core';
import { SofaService } from '../services/sofa.service';

@Component({
  selector: 'app-sofa',
  standalone: true,
  template: `
    <div>
      <h2>{{ getSofaDescription() }}</h2>
      <p>Volume: {{ getSofaVolume() }} cm³</p>
      <p>Heavy: {{ isSofaHeavy() }}</p>
    </div>
  `
})
export class SofaComponent {
  private sofaService = inject(SofaService);

  getSofaDescription(): string {
    return this.sofaService.display();
  }

  getSofaVolume(): number {
    return this.sofaService.calculateVolume();
  }

  isSofaHeavy(): string {
    return this.sofaService.isHeavy(20) ? 'Yes' : 'No';
  }
}