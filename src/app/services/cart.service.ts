import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  /*
  cart is a map
  key: id
  value: {quantity:value, price:value}
  */
  cart: Map<string, Cart> = new Map();

  constructor() {
    //this.cart = new Map();
  }

  getCart(): Map<string, Cart> {
    return this.cart;
  }

  addToCart(id: number, payload: Cart): Map<string, Cart> {

    const stringId = id.toString();
    // if id already exists (item already in cart)
    if( this.cart.has(stringId) ){
      const currentProductQuantity = Number(this.cart.get(stringId)?.quantity);
      payload.quantity += currentProductQuantity!;
    }

    this.cart.set(stringId, payload);
    
    console.log(`Added to cart:${this.cart}`);
    this.logCart();

    return this.cart;
  }

  logCart(): void {
    for(let key of this.cart.keys()){
      console.log(`Here is key:${key}`);
      const v = this.cart.get(key)!;
      console.log(`Here is price:${v.price}`);
      console.log(`Here is quantity:${v.quantity}`);
    }
  }

  clearCart(): void {
    this.cart = new Map();
  }

}
