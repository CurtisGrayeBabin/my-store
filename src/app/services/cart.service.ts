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

  getQuantity(id: number): number {
    return this.cart.get(id.toString())!.quantity;
  }

  getTotal(): number {
    let total: number = 0;

    for(let key of this.cart.keys()){
      let payload: CartPayload = this.cart.get(key)!;
      total += (payload.quantity * payload.price);
    }

    return total;
  }

  // allows the user to alter the quantity values in the cart page 
  alterQuantity(id: number, newQuantity: number): CartPayload {

    const stringId = id.toString();
    const updatedPayload = this.cart.get(stringId)!;

    // item has been deleted from the cart - delete its key
    if(newQuantity<=0) {
      this.cart.delete(stringId);
      return updatedPayload;
    }
  
    updatedPayload.quantity = newQuantity;

    this.cart.set(stringId,updatedPayload);

    return updatedPayload;
  }


  addToCart(id: number, payload: CartPayload): Map<string, CartPayload> {

    const stringId = id.toString();

    // if id already exists (item already in cart)
    if( this.cart.get(stringId) ){
      const currentProductQuantity = Number(this.cart.get(stringId)?.quantity);
      payload.quantity += currentProductQuantity!;
    }

    this.cart.set(stringId, payload);
    
    return this.cart;
  }

  clearCart(): void {
    this.cart = new Map();
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



}
