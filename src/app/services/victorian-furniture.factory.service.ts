import { Injectable } from '@angular/core';
import { FurnitureFactory, Chair, Sofa, CoffeeTable } from '../interfaces/furniture-factory.interface';

class VictorianChair implements Chair {
  style = 'Victorian';
  material = 'Wood';
  hasArmrest = true;
  color = 'Dark Brown';
  height = 100;
  width = 55;
  weight = 18;

  display(): string {
    return `This is a ${this.style} chair made of ${this.material} in ${this.color} color with armrests.`;
  }

  calculateArea(): number {
    return this.height * this.width;
  }

  isLightweight(threshold: number): boolean {
    return this.weight < threshold;
  }
}

class VictorianSofa implements Sofa {
  style = 'Victorian';
  material = 'Fabric';
  seats = 4;
  color = 'Red';
  length = 220;
  width = 90;
  weight = 50;

  display(): string {
    return `This is a ${this.style} sofa made of ${this.material} with ${this.seats} seats in ${this.color} color.`;
  }

  calculateVolume(): number {
    return this.length * this.width * this.seats;
  }

  isHeavy(threshold: number): boolean {
    return this.weight > threshold;
  }
}

class VictorianCoffeeTable implements CoffeeTable {
  style = 'Victorian';
  material = 'Wood';
  shape = 'Rectangular';
  color = 'Mahogany';
  diameter = 120;
  weight = 30;

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

@Injectable({
  providedIn: 'root',
})
export class VictorianFurnitureFactoryService implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createSofa(): Sofa {
    return new VictorianSofa();
  }

  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }

  getStyle(): string {
    return 'Victorian';
  }
}