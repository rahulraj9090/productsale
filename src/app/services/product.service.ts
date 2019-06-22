import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './IProduct';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = '../../assets/pos.products.json';

  private productSource = new BehaviorSubject('');

  currentProduct = this.productSource.asObservable();

  constructor( private http: HttpClient) { 

  }

 	getProducts() {
  		return this.http.get<IProduct[]>(this.apiUrl)
	}

	addToCart(data:any) {
	    this.productSource.next(data)
	}

}
