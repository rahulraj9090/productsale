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
	  		this.vat = this.vat + +<number>this.getVat(newdata['price']);
	  		this.diss = this.diss+ +<number>this.getDiss(newdata['price']);
	  		this.total = this.getTotal;
  		}
  	});
  }

  getVat(price){
  	return (price * this.initVat / 100);
  }

  getDiss(price){
  	return (price * this.initDiss / 100);
  }

  get getTotal(){
  	return ((this.amount - this.diss) + +this.vat);
  }
}
