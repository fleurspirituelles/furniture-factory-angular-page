import { Injectable } from "@angular/core";
import { FurnitureFactory, Chair, Sofa, CoffeeTable } from "../interfaces/furniture-factory.interface";

class ModernChair implements Chair {
    style = "Modern";
    material = "Plastic";
    hasArmrest = true;
    color = "White";
    height = 85;
    width = 45;
    weight = 10;

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

class ModernSofa implements Sofa {
    style = "Modern";
    material = "Fabric";
    seats = 2;
    color = "Gray";
    length = 180;
    width = 75;
    weight = 35;

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

class ModernCoffeeTable implements CoffeeTable {
    style = "Modern";
    material = "Wood";
    shape = "Square";
    color = "Black";
    diameter = 90;
    weight = 25;

    display(): string {
        return `This is a ${this.style} coffee table made of ${this.material} in ${this.color} color with a ${this.shape} shape.`;
    }

    calculateSurfaceArea(): number {
        return this.diameter * this.diameter;
    }

    isEasyToMove(threshold: number): boolean {
        return this.weight < threshold;
    }
}

@Injectable({
    providedIn: "root",
})
export class ModernFurnitureFactoryService implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createSofa(): Sofa {
        return new ModernSofa();
    }

    createCoffeeTable(): CoffeeTable {
        return new ModernCoffeeTable();
    }

    getStyle(): string {
        return "Modern";
    }
}