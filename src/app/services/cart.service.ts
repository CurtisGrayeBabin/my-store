import { Injectable } from '@angular/core';
import { CartPayload } from '../models/CartPayload';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  /*
  cart is a map
  key: id
  value: {quantity:value, price:value}
  */
  cart: Map<string, CartPayload> = new Map();

  constructor(private productService: ProductsService) {}

  getCart(): Map<string, CartPayload> {
    return this.cart;
  }

  addToCart(id: number, payload: CartPayload): Map<string, CartPayload> {

    const stringId = id.toString();
    // if id already exists (item already in cart)
    if( this.cart.get(stringId) ){
      const currentProductQuantity = Number(this.cart.get(stringId)?.quantity);
      payload.quantity += currentProductQuantity!;
    }

    this.cart.set(stringId, payload);
    
    //this.logCart();

    return this.cart;
  }

  logCart(): void {
    for(let key of this.cart.keys()){
      console.log(`Here is key:${key}`);
      const v = this.cart.get(key)!;
      console.log(`Here is price:${v.price}`);
      console.log(`Here is quantity:${v.quantity}`);
      console.log(``);
    }
    console.log(`End of cart.`)
  }

  clearCart(): void {
    this.cart = new Map();
  }

}
