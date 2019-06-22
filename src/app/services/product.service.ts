import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './IProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = '../../assets/pos.products.json';

 

  constructor( private http: HttpClient) { 

  }

 	getProducts() {
  		return this.http.get<IProduct[]>(this.apiUrl)
	}


}
