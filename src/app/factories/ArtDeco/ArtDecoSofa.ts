import { Sofa } from '../../components/Sofa';

export class ArtDecoSofa implements Sofa {
  style = "Art Deco";
  material = "Leather";
  seats = 3;
  color = "Black";
  length: number = 200;
  width: number = 80;
  weight: number = 40;

  display(): string {
    return `This is an ${this.style} sofa made of ${this.material} with ${this.seats} seats in ${this.color} color.`;
  }

  calculateVolume(): number {
    return this.length * this.width;
  }

  isHeavy(threshold: number): boolean {
    return this.weight > threshold;
  }
}