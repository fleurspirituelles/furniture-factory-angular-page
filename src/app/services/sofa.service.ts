// src/app/services/sofa.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SofaService {
  style: string = '';
  material: string = '';
  seats: number = 0;
  color: string = '';
  length: number = 0;
  width: number = 0;
  weight: number = 0;

  display(): string {
    return `This luxurious sofa embraces the ${this.style} style, upholstered in fine ${this.material}, comfortably accommodating up to ${this.seats} guests.`;
  }

  calculateVolume(): number {
    return this.length * this.width * this.seats;
  }

  isHeavy(threshold: number): boolean {
    return this.weight > threshold;
  }
}
