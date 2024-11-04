import { Injectable } from '@angular/core';
import { FurnitureFactory, Chair, Sofa, CoffeeTable } from '../interfaces/furniture-factory.interface';

@Injectable({
  providedIn: 'root'
})

export class VictorianFurnitureFactoryService implements FurnitureFactory {
  createChair(): Chair {
    return {
      style: 'Victorian',
      material: 'Wood',
      hasArmrest: true,
      color: 'Dark Brown',
      height: 100,
      width: 55,
      weight: 18,
      display: function () {
        return `This is a ${this.style} chair made of ${this.material} in ${this.color} color with armrests.`;
      },
      calculateArea: function () {
        return this.height * this.width;
      },
      isLightweight: function (threshold: number) {
        return this.weight < threshold;
      }
    };
  }

  createSofa(): Sofa {
    return {
      style: 'Victorian',
      material: 'Fabric',
      seats: 4,
      color: 'Red',
      length: 220,
      width: 90,
      weight: 50,
      display: function () {
        return `This is a ${this.style} sofa made of ${this.material} with ${this.seats} seats in ${this.color} color.`;
      },
      calculateVolume: function () {
        return this.length * this.width * this.seats;
      },
      isHeavy: function (threshold: number) {
        return this.weight > threshold;
      }
    };
  }

  createCoffeeTable(): CoffeeTable {
    return {
      style: 'Victorian',
      material: 'Wood',
      shape: 'Rectangular',
      color: 'Mahogany',
      diameter: 120,
      weight: 30,
      display: function () {
        return `This is a ${this.style} coffee table made of ${this.material} in ${this.color} color with a ${this.shape} shape.`;
      },
      calculateSurfaceArea: function () {
        return this.diameter * this.diameter / 2;
      },
      isEasyToMove: function (threshold: number) {
        return this.weight < threshold;
      }
    };
  }

  getStyle(): string {
    return 'Victorian';
  }
}
