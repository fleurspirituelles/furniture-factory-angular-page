import { Injectable } from '@angular/core';

export class CoffeeTable {
  constructor(
    public style: string,
    public material: string,
    public shape: string,
    public color: string,
    public diameter: number,
    public weight: number
  ) { }

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

@Injectable({
  providedIn: 'root',
})
export class CoffeeTableService {
  createCoffeeTable(
    style: string,
    material: string,
    shape: string,
    color: string = 'Default Color',
    diameter: number = 100,
    weight: number = 20
  ): CoffeeTable {
    if (diameter <= 0 || weight <= 0) {
      throw new Error('Diameter and weight must be positive values.');
    }
    return new CoffeeTable(style, material, shape, color, diameter, weight);
  }
}