import { Component, inject } from '@angular/core';
import { SofaService } from '../services/sofa.service';
import { Sofa } from '../services/sofa.service'; // Importa a classe Sofa

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
  private sofa: Sofa;

  constructor() {
    this.sofa = this.sofaService.createSofa(
      'Victorian',
      'Leather',
      4,
      'Red',
      220,
      90,
      50
    );
  }

  getSofaDescription(): string {
    return this.sofa.display();
  }

  getSofaVolume(): number {
    return this.sofa.calculateVolume();
  }

  isSofaHeavy(): string {
    return this.sofa.isHeavy(40) ? 'Yes' : 'No';
  }
}