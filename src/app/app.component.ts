import { Component, OnInit } from '@angular/core';
import { Product } from './models/Product';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 

  title: string = "Product List Page (main page)";
  // items for sale -> populated via HttpClient reading data.json in /assets
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // populate products array with the products from the data.json file in root /assets
    this.httpClient.get<Product[]>("assets/data.json").subscribe(product =>{
      this.products = product;
    });

  }

}