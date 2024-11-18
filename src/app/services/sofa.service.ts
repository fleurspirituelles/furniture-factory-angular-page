import { Injectable } from '@angular/core';

export class Sofa {
  constructor(
    public style: string,
    public material: string,
    public seats: number,
    public color: string,
    public length: number,
    public width: number,
    public weight: number
  ) { }

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

@Injectable({
  providedIn: 'root',
})
export class SofaService {
  createSofa(
    style: string,
    material: string,
    seats: number = 3,
    color: string = 'Default Color',
    length: number = 200,
    width: number = 90,
    weight: number = 40
  ): Sofa {
    if (length <= 0 || width <= 0 || weight <= 0 || seats <= 0) {
      throw new Error('Length, width, weight, and seats must be positive values.');
    }
    return new Sofa(style, material, seats, color, length, width, weight);
  }
}