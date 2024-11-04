import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeTableService {
  style: string = '';
  material: string = '';
  shape: string = '';
  color: string = '';
  diameter: number = 0;
  weight: number = 0;

  display(): string {
    return `This coffee table showcases a timeless ${this.shape} design in the ${this.style} style, meticulously crafted from ${this.material}.`;
  }

  calculateSurfaceArea(): number {
    return Math.PI * Math.pow(this.diameter / 2, 2);
  }

  isEasyToMove(threshold: number): boolean {
    return this.weight < threshold;
  }
}