import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  initVat:number = 10;
  initDiss:number = 10;
  item: number = 0;
  amount: number = 0;
  vat: number = 0;
  diss: number = 0;
  total: number = 0;

  constructor( private product:ProductService ) { }

  ngOnInit() {
  	this.product.currentProduct.subscribe(newdata => {
  		console.log(newdata)
  		if (newdata) {
  			this.item = this.item+1;
	  		this.amount = this.amount + +<number>newdata['price'];
	  		
  		}
  	});
  }

  
}
