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