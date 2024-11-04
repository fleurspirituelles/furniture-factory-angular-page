import { CoffeeTable } from '../../components/CoffeeTable';

export class ArtDecoCoffeeTable implements CoffeeTable {
  style = "Art Deco";
  material = "Glass";
  shape = "Round";
  color = "Silver";
  diameter: number = 100;
  weight: number = 20;

  display(): string {
    return `This is an ${this.style} coffee table made of ${this.material} in ${this.color} color with a ${this.shape} shape.`;
  }

  calculateSurfaceArea(): number {
    return Math.PI * Math.pow(this.diameter / 2, 2);
  }

  isEasyToMove(threshold: number): boolean {
    return this.weight < threshold;
  }
}