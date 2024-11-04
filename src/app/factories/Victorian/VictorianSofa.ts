import { Sofa } from '../../components/Sofa';

export class VictorianSofa implements Sofa {
  style = "Victorian";
  material = "Fabric";
  seats = 4;
  color = "Red";
  length: number = 220;
  width: number = 90;
  weight: number = 50;

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