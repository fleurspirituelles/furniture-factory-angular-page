import { Chair } from '../../components/Chair';

export class VictorianChair implements Chair {
  style = "Victorian";
  material = "Wood";
  hasArmrest = true;
  color = "Dark Brown";
  height: number = 100;
  width: number = 55;
  weight: number = 18;

  display(): string {
    return `This is a ${this.style} chair made of ${this.material} in ${this.color} color with armrests.`;
  }

  calculateArea(): number {
    return this.height * this.width;
  }

  isLightweight(threshold: number): boolean {
    return this.weight < threshold;
  }
}