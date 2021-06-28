import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
      // stream products within data.json
      return this.httpClient.get<Product[]>("../../assets/data.json");
    }
  
}
