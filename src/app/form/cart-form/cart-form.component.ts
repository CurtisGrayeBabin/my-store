import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  nameLabel: string = "Full name";
  addressLabel: string = "Address";
  creditCardNumberLabel: string = "Credit card number";

  nameDefault: string = "(minimum 3 characters)";
  addressDefault: string = "(minimum 6 characters)";
  creditCardNumberDefault: string = "(16-digit number)";

  message: string = "We will never share your information with anyone else.";

  freeId: string = "free";
  speedyId: string = "speedy";
  overnightId: string = "overnight";


  freeBusinessDays: string = "7-10 business days";
  speedyBusinessDays: string = "3-4 business days";
  overnightBusinessDays: string = "1 day";

  shippingTimeline: string = this.freeBusinessDays;

  free: string = `Free shipping: ${this.freeBusinessDays}`;
  speedy: string = `Speedy shipping: ${this.speedyBusinessDays}`;
  overnight: string = `Overnight shipping: ${this.overnightBusinessDays}`;

  freePrice: number = 0;
  speedyPrice: number = 7.99;
  overnightPrice: number = 29.99;

  shipping: number = 0;
  selectedRadioId: string = '';

  fullName: string = '';
  address : string = '';
  cc: string = '';

  @Output() totalEmitter: EventEmitter<number> = new EventEmitter;

  constructor(private orderService: OrderService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  changeShipping(e: Event): void {
    // extract chosen radio id
    const element = e.target as HTMLInputElement;
    this.selectedRadioId = element.id;

    // set shipping rate according to selected radio id
    if(this.selectedRadioId===this.freeId){
      this.shipping=this.freePrice;
      this.shippingTimeline=this.freeBusinessDays;
    }
    else if(this.selectedRadioId===this.speedyId){
      this.shipping=this.speedyPrice;
      this.shippingTimeline=this.speedyBusinessDays;
    }
    else if(this.selectedRadioId===this.overnightId){
      this.shipping=this.overnightPrice;
      this.shippingTimeline=this.overnightBusinessDays;
    }

    // update the cart's shipping price
    this.cartService.setShipping(this.shipping);
    // update total price in cart page
    this.totalEmitter.emit(this.cartService.getTotal());
  }

  confirmation(): void {
    this.orderService.setOrderInfo(this.fullName,this.address,this.cartService.getTotal(),this.shippingTimeline);
    this.cartService.clearCart();
    this.router.navigateByUrl(`/cart/confirmation`);
  }

}
