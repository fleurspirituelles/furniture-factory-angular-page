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