import { Injectable } from '@angular/core';

interface CartItem {
  type: string;
  style: string;
  details: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  addItem(item: CartItem) {
    this.cart.push(item);
  }

  getCart() {
    return [...this.cart];
  }

  clearCart() {
    this.cart = [];
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }
}

