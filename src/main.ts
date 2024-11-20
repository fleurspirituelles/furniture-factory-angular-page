import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtDecoFurnitureFactoryService } from './app/services/art-deco-furniture.factory.service';
import { ModernFurnitureFactoryService } from './app/services/modern-furniture.factory.service';
import { VictorianFurnitureFactoryService } from './app/services/victorian-furniture.factory.service';

import { CartService } from './app/services/cart.service';
import { StyleService } from './app/services/style.service';
import { Furniture, FurnitureFactory } from './app/interfaces/furniture-factory.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],

export class App {
  selectedFurnitureType: string = 'chair';
  selectedStyle: string = 'art-deco';
  styleConflictWarning: boolean = false;
  purchaseComplete: boolean = false;
  showCartModal: boolean = false;

  artDecoFactory = inject(ArtDecoFurnitureFactoryService);
  modernFactory = inject(ModernFurnitureFactoryService);
  victorianFactory = inject(VictorianFurnitureFactoryService);

  cartService = inject(CartService);
  styleService = inject(StyleService);

  private factoryMap: Record<string, FurnitureFactory> = {
    'art-deco': this.artDecoFactory,
    'modern': this.modernFactory,
    'victorian': this.victorianFactory,
  };

  private furnitureMap: Record<'chair' | 'coffeeTable' | 'sofa', (factory: FurnitureFactory) => Furniture> = {
    chair: (factory: FurnitureFactory) => factory.createChair(),
    coffeeTable: (factory: FurnitureFactory) => factory.createCoffeeTable(),
    sofa: (factory: FurnitureFactory) => factory.createSofa(),
  };

  toggleCartModal() {
    this.showCartModal = !this.showCartModal;
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.checkForStyleConflict();
  }

  addFurniture() {
    const factory = this.factoryMap[this.selectedStyle];
    const createFurniture = this.furnitureMap[this.selectedFurnitureType as 'chair' | 'coffeeTable' | 'sofa'];
    const furniture = createFurniture(factory);

    const details = this.createFurnitureDetails(furniture);

    this.cartService.addItem({
      type: this.selectedFurnitureType,
      style: this.selectedStyle,
      details,
    });

    this.checkForStyleConflict();
  }

  confirmPurchase() {
    this.purchaseComplete = true;
    this.showCartModal = false;
  }

  resetPurchase() {
    this.cartService.clearCart();
    this.styleConflictWarning = false;
    this.purchaseComplete = false;
  }

  private checkForStyleConflict() {
    const cart = this.cartService.getCart();
    if (cart.length > 1) {
      const firstStyle = cart[0].style;
      this.styleConflictWarning = cart.some((item) => item.style !== firstStyle);
    } else {
      this.styleConflictWarning = false;
    }
  }

  private createFurnitureDetails(furniture: any): string {
    if (furniture.style === 'chair') {
      return `This exquisite ${furniture.style} chair, crafted from fine ${furniture.material} with a splendid ${furniture.color} finish, brings both elegance and comfort to any room.`;
    } else if (furniture.style === 'coffeeTable') {
      return `The ${furniture.style} coffee table, a masterpiece of ${furniture.material} with a ${furniture.shape} shape in ${furniture.color}, adds a touch of sophistication to your space.`;
    } else if (furniture.style === 'sofa') {
      return `Indulge in the comfort of this luxurious ${furniture.style} sofa, upholstered in premium ${furniture.material} and designed to accommodate up to ${furniture.seats} guests.`;
    }
    return '';
  }
}

bootstrapApplication(App);