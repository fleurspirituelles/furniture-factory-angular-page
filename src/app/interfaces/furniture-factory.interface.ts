export interface Furniture {
    style: string;
    material: string;
    color: string;
    weight: number;

    display(): string;
}

export interface Chair extends Furniture {
    hasArmrest: boolean;
    height: number;
    width: number;

    calculateArea(): number;
    isLightweight(threshold: number): boolean;
}

export interface Sofa extends Furniture {
    seats: number;
    length: number;
    width: number;

    calculateVolume(): number;
    isHeavy(threshold: number): boolean;
}

export interface CoffeeTable extends Furniture {
    shape: string;
    diameter: number;

    calculateSurfaceArea(): number;
    isEasyToMove(threshold: number): boolean;
}

export interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createCoffeeTable(): CoffeeTable;
    getStyle(): string;
}