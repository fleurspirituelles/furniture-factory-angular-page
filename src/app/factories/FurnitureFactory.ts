export interface Chair {
  style: string;
  material: string;
  hasArmrest: boolean;
  color: string;
  height: number;
  width: number;
  weight: number;

  display(): string;
  calculateArea(): number;
  isLightweight(threshold: number): boolean;
}

export interface Sofa {
  style: string;
  material: string;
  seats: number;
  color: string;
  length: number;
  width: number;
  weight: number;

  display(): string;
  calculateVolume(): number;
  isHeavy(threshold: number): boolean;
}

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

export interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createCoffeeTable(): CoffeeTable;
  getStyle(): string;
}