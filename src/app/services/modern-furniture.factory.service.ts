import { Injectable } from "@angular/core";
import {
    FurnitureFactory,
    Chair,
    Sofa,
    CoffeeTable,
} from "../interfaces/furniture-factory.interface";

@Injectable({
    providedIn: "root",
})

export class ModernFurnitureFactoryService implements FurnitureFactory {
    createChair(): Chair {
        return {
            style: "Modern",
            material: "Plastic",
            hasArmrest: true,
            color: "White",
            height: 85,
            width: 45,
            weight: 10,
            display: function () {
                return `This is a ${this.style} chair made of ${this.material} in ${this.color} color with armrests.`;
            },
            calculateArea: function () {
                return this.height * this.width;
            },
            isLightweight: function (threshold: number) {
                return this.weight < threshold;
            },
        };
    }

    createSofa(): Sofa {
        return {
            style: "Modern",
            material: "Fabric",
            seats: 2,
            color: "Gray",
            length: 180,
            width: 75,
            weight: 35,
            display: function () {
                return `This is a ${this.style} sofa made of ${this.material} with ${this.seats} seats in ${this.color} color.`;
            },
            calculateVolume: function () {
                return this.length * this.width * this.seats;
            },
            isHeavy: function (threshold: number) {
                return this.weight > threshold;
            },
        };
    }

    createCoffeeTable(): CoffeeTable {
        return {
            style: "Modern",
            material: "Wood",
            shape: "Square",
            color: "Black",
            diameter: 90,
            weight: 25,
            display: function () {
                return `This is a ${this.style} coffee table made of ${this.material} in ${this.color} color with a ${this.shape} shape.`;
            },
            calculateSurfaceArea: function () {
                return this.diameter * this.diameter;
            },
            isEasyToMove: function (threshold: number) {
                return this.weight < threshold;
            },
        };
    }

    getStyle(): string {
        return "Modern";
    }
}
