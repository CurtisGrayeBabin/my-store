import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FormModule
  ],
  exports: [
    CartComponent,
    CartItemsComponent
  ]
})
export class CartModule { }
