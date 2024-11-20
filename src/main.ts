import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChairComponent } from './app/components/chair.component';
import { CoffeeTableComponent } from './app/components/coffee-table.component';
import { SofaComponent } from './app/components/sofa.component';

import { ArtDecoFurnitureFactoryService } from './app/services/art-deco-furniture.factory.service';
import { ModernFurnitureFactoryService } from './app/services/modern-furniture.factory.service';
import { VictorianFurnitureFactoryService } from './app/services/victorian-furniture.factory.service';

import { CartService } from './app/services/cart.service';
import { StyleService } from './app/services/style.service';
import { Furniture, FurnitureFactory } from './app/interfaces/furniture-factory.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChairComponent, CoffeeTableComponent, SofaComponent, CommonModule, FormsModule],
  template: `
    <h1>Welcome to the Furniture Store!</h1>

    <div *ngIf="!purchaseComplete">
      <h2>Select a Furniture Item</h2>
      <label>Furniture Type:</label>
      <select [(ngModel)]="selectedFurnitureType">
        <option value="chair">Chair</option>
        <option value="coffeeTable">Coffee Table</option>
        <option value="sofa">Sofa</option>
      </select>

      <label>Furniture Style:</label>
      <select [(ngModel)]="selectedStyle">
        <option value="art-deco">Art Deco</option>
        <option value="modern">Modern</option>
        <option value="victorian">Victorian</option>
      </select>

      <button (click)="addFurniture()">Add Furniture</button>

      <h2>Shopping Cart</h2>
      <ul>
        <li *ngFor="let item of cartService.getCart()">
          <span class="cart-item-type">{{ item.type }}: </span>
          <span class="cart-item-style">{{ item.style }}</span><br>
          {{ item.details }}
        </li>
      </ul>

      <div *ngIf="permanentWarning" style="color: red;">
        Mixed styles in your selection may affect aesthetics!
      </div>

      <button (click)="completePurchase()">Complete Purchase</button>
    </div>

    <div *ngIf="purchaseComplete">
      <h2>Purchase completed! Thank you for choosing us!</h2>
      <button (click)="resetPurchase()">New Purchase</button>
    </div>
  `,
})
export class App {
  selectedFurnitureType: string = 'chair';
  selectedStyle: string = 'art-deco';
  permanentWarning: boolean = false;
  purchaseComplete: boolean = false;

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
  
  

  addFurniture() {
    if (this.styleService.hasStyleConflict(this.selectedStyle)) {
      this.permanentWarning = true;
    } else {
      const factory = this.factoryMap[this.selectedStyle];
      if (!factory) {
        console.error(`Factory not found for style: ${this.selectedStyle}`);
        return;
      }
  
      const createFurniture = this.furnitureMap[this.selectedFurnitureType as 'chair' | 'coffeeTable' | 'sofa'];
      if (!createFurniture) {
        console.error(`Furniture type not found: ${this.selectedFurnitureType}`);
        return;
      }
  
      const furniture = createFurniture(factory);
  
      const details = this.createFurnitureDetails(furniture);

      this.cartService.addItem({
        type: this.selectedFurnitureType,
        style: this.selectedStyle,
        details,
      });
    }
  }
  

  completePurchase() {
    this.purchaseComplete = true;
  }

  resetPurchase() {
    this.cartService.clearCart();
    this.styleService.resetStyle();
    this.permanentWarning = false;
    this.purchaseComplete = false;
    this.selectedFurnitureType = 'chair';
    this.selectedStyle = 'art-deco';
  }

  private createFurnitureDetails(furniture: any): string {
    if (furniture.style === 'chair') {
      return `This exquisite ${furniture.style} chair, crafted from fine ${furniture.material} with a splendid ${furniture.color} finish, brings both elegance and comfort to any room. It offers a surface area of ${furniture.calculateArea()} square centimeters, and with its weight of ${furniture.weight} kg, it is ${furniture.isLightweight(10) ? 'lightweight and easy to move' : 'sturdy and stable'}.`;
    } else if (furniture.style === 'coffeeTable') {
      return `The ${furniture.style} coffee table, a masterpiece of ${furniture.material} with a ${furniture.shape} shape in ${furniture.color}, adds a touch of sophistication to your space. Its surface area spans ${furniture.calculateSurfaceArea()} square centimeters, making it ${furniture.isEasyToMove(15) ? 'easy to rearrange' : 'solid and steadfast'}.`;
    } else if (furniture.style === 'sofa') {
      return `Indulge in the comfort of this luxurious ${furniture.style} sofa, upholstered in premium ${furniture.material} and designed to accommodate up to ${furniture.seats} guests. With a generous volume of ${furniture.calculateVolume()} cubic centimeters, it provides ${furniture.isHeavy(20) ? 'a substantial presence in your living area' : 'a cozy yet light addition to any space'}.`;
    }
    return '';
  }
}

bootstrapApplication(App);
