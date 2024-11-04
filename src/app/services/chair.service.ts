import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChairService {
  style: string = '';
  material: string = '';
  hasArmrest: boolean = false;
  color: string = '';
  height: number = 0;
  width: number = 0;
  weight: number = 0;

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