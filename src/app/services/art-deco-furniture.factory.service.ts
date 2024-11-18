import { Injectable } from '@angular/core';
import { FurnitureFactory, Chair, Sofa, CoffeeTable } from '../interfaces/furniture-factory.interface';

class ArtDecoChair implements Chair {
    style = 'Art Deco';
    material = 'Metal';
    hasArmrest = false;
    color = 'Gold';
    height = 90;
    width = 50;
    weight = 15;

    display(): string {
        return `This is an ${this.style} chair made of ${this.material} in ${this.color} color.`;
    }

    calculateArea(): number {
        return this.height * this.width;
    }

    isLightweight(threshold: number): boolean {
        return this.weight < threshold;
    }
}

class ArtDecoSofa implements Sofa {
    style = 'Art Deco';
    material = 'Leather';
    seats = 3;
    color = 'Black';
    length = 200;
    width = 80;
    weight = 40;

    display(): string {
        return `This is an ${this.style} sofa made of ${this.material} with ${this.seats} seats in ${this.color} color.`;
    }

    calculateVolume(): number {
        return this.length * this.width * this.seats;
    }

    isHeavy(threshold: number): boolean {
        return this.weight > threshold;
    }
}

class ArtDecoCoffeeTable implements CoffeeTable {
    style = 'Art Deco';
    material = 'Glass';
    shape = 'Round';
    color = 'Silver';
    diameter = 100;
    weight = 20;

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

@Injectable({
    providedIn: 'root',
})
export class ArtDecoFurnitureFactoryService implements FurnitureFactory {
    createChair(): Chair {
        return new ArtDecoChair();
    }

    createSofa(): Sofa {
        return new ArtDecoSofa();
    }

    createCoffeeTable(): CoffeeTable {
        return new ArtDecoCoffeeTable();
    }

    getStyle(): string {
        return 'Art Deco';
    }
}