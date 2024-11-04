import { FurnitureFactory } from '../FurnitureFactory';
import { Chair } from '../../components/Chair';
import { Sofa } from '../../components/Sofa';
import { CoffeeTable } from '../../components/CoffeeTable';
import { ArtDecoChair } from './ArtDecoChair';
import { ArtDecoSofa } from './ArtDecoSofa';
import { ArtDecoCoffeeTable } from './ArtDecoCoffeeTable';

export class ArtDecoFurnitureFactory implements FurnitureFactory {
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
    return "Art Deco";
  }
}