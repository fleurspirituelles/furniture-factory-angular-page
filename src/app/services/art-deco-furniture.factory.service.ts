import { Injectable } from '@angular/core';
import { FurnitureFactory, Chair, Sofa, CoffeeTable } from '../interfaces/furniture-factory.interface';

@Injectable({
    providedIn: 'root'
})

export class ArtDecoFurnitureFactoryService implements FurnitureFactory {
    createChair(): Chair {
        return {
            style: 'Art Deco',
            material: 'Metal',
            hasArmrest: false,
            color: 'Gold',
            height: 90,
            width: 50,
            weight: 15,
            display: function () {
                return `This is an ${this.style} chair made of ${this.material} in ${this.color} color.`;
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
            style: 'Art Deco',
            material: 'Leather',
            seats: 3,
            color: 'Black',
            length: 200,
            width: 80,
            weight: 40,
            display: function () {
                return `This is an ${this.style} sofa made of ${this.material} with ${this.seats} seats in ${this.color} color.`;
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
            style: 'Art Deco',
            material: 'Glass',
            shape: 'Round',
            color: 'Silver',
            diameter: 100,
            weight: 20,
            display: function () {
                return `This is an ${this.style} coffee table made of ${this.material} in ${this.color} color with a ${this.shape} shape.`;
            },
            calculateSurfaceArea: function () {
                return Math.PI * Math.pow(this.diameter / 2, 2);
            },
            isEasyToMove: function (threshold: number) {
                return this.weight < threshold;
            }
        };
    }

    getStyle(): string {
        return 'Art Deco';
    }
}
