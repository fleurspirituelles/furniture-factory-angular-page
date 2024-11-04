import { FurnitureFactory } from '../FurnitureFactory';
import { Chair } from '../../components/Chair';
import { Sofa } from '../../components/Sofa';
import { CoffeeTable } from '../../components/CoffeeTable';
import { ModernChair } from './ModernChair';
import { ModernSofa } from './ModernSofa';
import { ModernCoffeeTable } from './ModernCoffeeTable';

export class ModernFurnitureFactory implements FurnitureFactory {
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