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
    seats: number,
    color: string,
    length: number,
    width: number,
    weight: number
  ): Sofa {
    return new Sofa(style, material, seats, color, length, width, weight);
  }
}