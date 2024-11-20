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

  addFurniture() {
    if (this.styleService.hasStyleConflict(this.selectedStyle)) {
      this.permanentWarning = true;
    } else {
      const factory = this.getFactory(this.selectedStyle);
      if (!factory) return;

      const details = this.createFurnitureDetails(factory);
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

  private getFactory(style: string) {
    switch (style) {
      case 'art-deco':
        return this.artDecoFactory;
      case 'modern':
        return this.modernFactory;
      case 'victorian':
        return this.victorianFactory;
      default:
        return null;
    }
  }

  private createFurnitureDetails(factory: any): string {
    switch (this.selectedFurnitureType) {
      case 'chair':
        const chair = factory.createChair();
        return `This exquisite ${chair.style} chair, crafted from fine ${chair.material} with a splendid ${chair.color} finish, brings both elegance and comfort to any room. It offers a surface area of ${chair.calculateArea()} square centimeters, and with its weight of ${chair.weight} kg, it is ${chair.isLightweight(10) ? 'lightweight and easy to move' : 'sturdy and stable'}.`;

      case 'coffeeTable':
        const coffeeTable = factory.createCoffeeTable();
        return `The ${coffeeTable.style} coffee table, a masterpiece of ${coffeeTable.material} with a ${coffeeTable.shape} shape in ${coffeeTable.color}, adds a touch of sophistication to your space. Its surface area spans ${coffeeTable.calculateSurfaceArea()} square centimeters, making it ${coffeeTable.isEasyToMove(15) ? 'easy to rearrange' : 'solid and steadfast'}.`;

      case 'sofa':
        const sofa = factory.createSofa();
        return `Indulge in the comfort of this luxurious ${sofa.style} sofa, upholstered in premium ${sofa.material} and designed to accommodate up to ${sofa.seats} guests. With a generous volume of ${sofa.calculateVolume()} cubic centimeters, it provides ${sofa.isHeavy(20) ? 'a substantial presence in your living area' : 'a cozy yet light addition to any space'}.`;

      default:
        return '';
    }
  }
}

bootstrapApplication(App);