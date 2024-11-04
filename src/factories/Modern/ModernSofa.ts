import { Sofa } from '../../components/Sofa';

export class ModernSofa implements Sofa {
  style = "Modern";
  material = "Fabric";
  seats = 2;
  color = "Gray";
  length: number = 180;
  width: number = 75;
  weight: number = 35;

  display(): string {
    return `This is a ${this.style} sofa made of ${this.material} with ${this.seats} seats in ${this.color} color.`;
  }

  calculateVolume(): number {
    return this.length * this.width;
  }

  isHeavy(threshold: number): boolean {
    return this.weight > threshold;
  }
}