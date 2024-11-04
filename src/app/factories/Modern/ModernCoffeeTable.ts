import { CoffeeTable } from '../../components/CoffeeTable';

export class ModernCoffeeTable implements CoffeeTable {
  style = "Modern";
  material = "Wood";
  shape = "Square";
  color = "Black";
  diameter: number = 90;
  weight: number = 25;

  display(): string {
    return `This is a ${this.style} coffee table made of ${this.material} in ${this.color} color with a ${this.shape} shape.`;
  }

  calculateSurfaceArea(): number {
    return this.diameter * this.diameter;
  }

  isEasyToMove(threshold: number): boolean {
    return this.weight < threshold;
  }
}