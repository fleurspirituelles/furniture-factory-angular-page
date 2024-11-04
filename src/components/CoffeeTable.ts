export interface CoffeeTable {
  style: string;
  material: string;
  shape: string;
  color: string;
  diameter: number;
  weight: number;

  display(): string;
  calculateSurfaceArea(): number;
  isEasyToMove(threshold: number): boolean;
}