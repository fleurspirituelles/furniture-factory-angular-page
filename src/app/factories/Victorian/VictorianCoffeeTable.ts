import { CoffeeTable } from '../../components/CoffeeTable';

export class VictorianCoffeeTable implements CoffeeTable {
  style = "Victorian";
  material = "Wood";
  shape = "Rectangular";
  color = "Mahogany";
  diameter: number = 120;
  weight: number = 30;

  display(): string {
    return `This is a ${this.style} coffee table made of ${this.material} in ${this.color} color with a ${this.shape} shape.`;
  }

  calculateSurfaceArea(): number {
    return this.diameter * this.diameter / 2;
  }

  isEasyToMove(threshold: number): boolean {
    return this.weight < threshold;
  }
}