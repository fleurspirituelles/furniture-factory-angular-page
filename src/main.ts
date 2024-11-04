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

import { FurnitureFactory } from './app/interfaces/furniture-factory.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChairComponent, CoffeeTableComponent, SofaComponent, CommonModule, FormsModule],
  template: `
    <h1>Welcome to the Furniture Store!</h1>
    <label>Select Furniture Style:</label>
    <select [(ngModel)]="selectedStyle" (change)="updateFactory()">
      <option value="art-deco">Art Deco</option>
      <option value="modern">Modern</option>
      <option value="victorian">Victorian</option>
    </select>

    <label>Select Furniture Type:</label>
    <div>
      <label>
        <input type="checkbox" [(ngModel)]="furnitureSelection.chair" />
        Chair
      </label>
      <label>
        <input type="checkbox" [(ngModel)]="furnitureSelection.coffeeTable" />
        Coffee Table
      </label>
      <label>
        <input type="checkbox" [(ngModel)]="furnitureSelection.sofa" />
        Sofa
      </label>
    </div>

    <button (click)="confirmSelection()">Confirm Selection</button>

    <div *ngIf="showWarning" style="color: red;">
      Warning: It is recommended to select matching furniture styles.
    </div>

    <div *ngIf="selectedFactory">
      <app-chair *ngIf="furnitureSelection.chair"></app-chair>
      <app-coffee-table *ngIf="furnitureSelection.coffeeTable"></app-coffee-table>
      <app-sofa *ngIf="furnitureSelection.sofa"></app-sofa>
    </div>
  `,
})
export class App {
  selectedStyle: string = 'art-deco';
  selectedFactory: FurnitureFactory | null = null;
  showWarning: boolean = false;

  furnitureSelection = {
    chair: false,
    coffeeTable: false,
    sofa: false,
  };

  artDecoFactory = inject(ArtDecoFurnitureFactoryService);
  modernFactory = inject(ModernFurnitureFactoryService);
  victorianFactory = inject(VictorianFurnitureFactoryService);

  updateFactory() {
    switch (this.selectedStyle) {
      case 'art-deco':
        this.selectedFactory = this.artDecoFactory;
        break;
      case 'modern':
        this.selectedFactory = this.modernFactory;
        break;
      case 'victorian':
        this.selectedFactory = this.victorianFactory;
        break;
      default:
        this.selectedFactory = null;
    }
  }

  confirmSelection() {
    const selectedStyles = [this.artDecoFactory, this.modernFactory, this.victorianFactory];
    this.showWarning = selectedStyles.filter(factory => factory === this.selectedFactory).length > 1;

    this.updateFactory();
  }
}

bootstrapApplication(App);