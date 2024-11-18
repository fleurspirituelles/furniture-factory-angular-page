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

import { FurnitureFactory, Chair, CoffeeTable, Sofa } from './app/interfaces/furniture-factory.interface';

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
        <li *ngFor="let item of cart">
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
  initialStyle: string | null = null;

  cart: Array<{ type: string; style: string; details: string }> = [];
  styleWarning: boolean = false;
  permanentWarning: boolean = false;
  purchaseComplete: boolean = false;

  artDecoFactory = inject(ArtDecoFurnitureFactoryService);
  modernFactory = inject(ModernFurnitureFactoryService);
  victorianFactory = inject(VictorianFurnitureFactoryService);

  addFurniture() {
    if (!this.initialStyle) {
      this.initialStyle = this.selectedStyle;
    } else if (this.initialStyle !== this.selectedStyle) {
      this.styleWarning = true;
      this.permanentWarning = true;
    } else {
      this.styleWarning = false;
    }

    let factory: FurnitureFactory;
    switch (this.selectedStyle) {
      case 'art-deco':
        factory = this.artDecoFactory;
        break;
      case 'modern':
        factory = this.modernFactory;
        break;
      case 'victorian':
        factory = this.victorianFactory;
        break;
      default:
        return;
    }

    let details = '';
    switch (this.selectedFurnitureType) {
      case 'chair':
        const chair = factory.createChair();
        details = `This exquisite ${chair.style} chair, crafted from fine ${chair.material} with a splendid ${chair.color} finish, brings both elegance and comfort to any room. It offers a surface area of ${chair.calculateArea()} square centimeters, and with its weight of ${chair.weight} kg, it is ${chair.isLightweight(10) ? 'lightweight and easy to move' : 'sturdy and stable'}.`;
        break;

      case 'coffeeTable':
        const coffeeTable = factory.createCoffeeTable();
        details = `The ${coffeeTable.style} coffee table, a masterpiece of ${coffeeTable.material} with a ${coffeeTable.shape} shape in ${coffeeTable.color}, adds a touch of sophistication to your space. Its surface area spans ${coffeeTable.calculateSurfaceArea()} square centimeters, making it ${coffeeTable.isEasyToMove(15) ? 'easy to rearrange' : 'solid and steadfast'}.`;
        break;

      case 'sofa':
        const sofa = factory.createSofa();
        details = `Indulge in the comfort of this luxurious ${sofa.style} sofa, upholstered in premium ${sofa.material} and designed to accommodate up to ${sofa.seats} guests. With a generous volume of ${sofa.calculateVolume()} cubic centimeters, it provides ${sofa.isHeavy(20) ? 'a substantial presence in your living area' : 'a cozy yet light addition to any space'}.`;
        break;

      default:
        return;
    }

    this.cart.push({
      type: this.selectedFurnitureType,
      style: this.selectedStyle,
      details,
    });

    this.styleWarning = false;
  }

  completePurchase() {
    this.purchaseComplete = true;
  }

  resetPurchase() {
    this.cart = [];
    this.initialStyle = null;
    this.permanentWarning = false;
    this.purchaseComplete = false;
    this.selectedFurnitureType = 'chair';
    this.selectedStyle = 'art-deco';
  }
}

bootstrapApplication(App);