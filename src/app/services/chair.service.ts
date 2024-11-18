import { Injectable } from '@angular/core';

export class Chair {
  constructor(
    public style: string,
    public material: string,
    public hasArmrest: boolean,
    public color: string,
    public height: number,
    public width: number,
    public weight: number
  ) { }

  display(): string {
    return `This chair exemplifies the ${this.style} style, crafted from ${this.material} with a rich ${this.color} finish.`;
  }

  calculateArea(): number {
    return this.height * this.width;
  }

  isLightweight(threshold: number): boolean {
    return this.weight < threshold;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ChairService {
  createChair(
    style: string,
    material: string,
    hasArmrest: boolean = false,
    color: string = 'Default Color',
    height: number = 80,
    width: number = 50,
    weight: number = 10
  ): Chair {
    if (height <= 0 || width <= 0 || weight <= 0) {
      throw new Error('Height, width, and weight must be positive values.');
    }
    return new Chair(style, material, hasArmrest, color, height, width, weight);
  }
}