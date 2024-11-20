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
  template: `
    <h1>Welcome to the Furniture Store!</h1>

    <!-- Cart Icon -->
    <div style="position: absolute; top: 20px; right: 20px; cursor: pointer;">
      <span (click)="toggleCartModal()" style="font-size: 1.5rem;">
        🛒 <span *ngIf="cartService.getCart().length > 0" style="color: red; font-weight: bold;">({{ cartService.getCart().length }})</span>
      </span>
    </div>

    <!-- Warning for Mixed Styles -->
    <div *ngIf="styleConflictWarning" style="color: red; text-align: center; margin-top: 10px;">
      Warning: You have selected furniture with different styles. This might affect the overall aesthetic!
    </div>

    <!-- Modal for Cart Review -->
    <div
        *ngIf="showCartModal"
        style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        width: 90%;
        max-width: 500px;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: fadeIn 0.3s ease-in-out;
      "
    >
      <h2
          style="
          text-align: center;
          margin-bottom: 20px;
          color: #a67c52;
          font-size: 1.8rem;
          font-weight: bold;
        "
      >
        Your Cart
      </h2>
      <ul style="padding: 0; margin: 0; list-style: none;">
        <li
            *ngFor="let item of cartService.getCart(); let i = index"
            style="
            background-color: #d9c7a0;
            border-radius: 10px;
            margin-bottom: 10px;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div>
            <span
                style="display: block; font-weight: bold; color: #4a3b2b;"
            >{{ item.type }}: {{ item.style }}</span>
            <span style="color: #4a3b2b; font-size: 0.9rem;"
            >{{ item.details }}</span
            >
          </div>
          <button
              (click)="removeItem(i)"
              style="
              background-color: #dc3545;
              color: white;
              border: none;
              border-radius: 8px;
              padding: 10px 15px;
              font-size: 0.9rem;
              cursor: pointer;
              transition: background-color 0.3s ease;
            "
          >
            Remove
          </button>
        </li>
      </ul>
      <button
          (click)="confirmPurchase()"
          style="
          margin-top: 20px;
          width: 100%;
          background-color: #28a745;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        "
      >
        Confirm Purchase
      </button>
      <button
          (click)="toggleCartModal()"
          style="
          margin-top: 10px;
          width: 100%;
          background-color: #6c757d;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        "
      >
        Close
      </button>
    </div>

    <!-- Main Content -->
    <div *ngIf="!purchaseComplete">
      <h2>Select an Item</h2>
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
    </div>

    <!-- Purchase Complete -->
    <div *ngIf="purchaseComplete">
      <h2>Purchase completed! Thank you for choosing us!</h2>
      <button (click)="resetPurchase()">New Purchase</button>
    </div>
  `,
})

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