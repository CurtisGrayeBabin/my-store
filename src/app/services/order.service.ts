import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  userName: string = '';
  userAddress: string = '';
  orderTotal: number = 0;

  constructor() { }

  setOrderInfo(name: string, address: string, total: number): void {
    this.userName = name;
    this.userAddress = address;
    this.orderTotal = total;
  }

  getName(): string {
    return this.userName;
  }

  getAddress(): string {
    return this.userAddress;
  }

  getTotal(): number {
    return this.orderTotal;
  }

}
