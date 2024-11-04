import { Chair } from '../../components/Chair';

export class ArtDecoChair implements Chair {
  style = "Art Deco";
  material = "Metal";
  hasArmrest = false;
  color = "Gold";
  height: number = 90;
  width: number = 50;
  weight: number = 15;

  display(): string {
    return `This is an ${this.style} chair made of ${this.material} in ${this.color} color.`;
  }

  calculateArea(): number {
    return this.height * this.width;
  }

  isLightweight(threshold: number): boolean {
    return this.weight < threshold;
  }
}