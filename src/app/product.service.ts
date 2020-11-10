import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }


  loadProductDetails():Observable<Product[]>{
    console.log("in service");
    return this.httpClient.get<Product[]>("./assets/product.json");

  }

  

}
