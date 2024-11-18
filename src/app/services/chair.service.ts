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
    hasArmrest: boolean,
    color: string,
    height: number,
    width: number,
    weight: number
  ): Chair {
    return new Chair(style, material, hasArmrest, color, height, width, weight);
  }
}