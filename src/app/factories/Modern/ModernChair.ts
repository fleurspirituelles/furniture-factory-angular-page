import { Chair } from '../../components/Chair';

export class ModernChair implements Chair {
  style = "Modern";
  material = "Plastic";
  hasArmrest = true;
  color = "White";
  height: number = 85;
  width: number = 45;
  weight: number = 10;

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