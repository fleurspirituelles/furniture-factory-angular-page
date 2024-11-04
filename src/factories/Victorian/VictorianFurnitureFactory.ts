import { FurnitureFactory } from '../FurnitureFactory';
import { Chair } from '../../components/Chair';
import { Sofa } from '../../components/Sofa';
import { CoffeeTable } from '../../components/CoffeeTable';
import { VictorianChair } from './VictorianChair';
import { VictorianSofa } from './VictorianSofa';
import { VictorianCoffeeTable } from './VictorianCoffeeTable';

export class VictorianFurnitureFactory implements FurnitureFactory {
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