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
  pitem: number = 1;
  price: number = 0;
  amount: number = 0;
  vat: number = 0;
  diss: number = 0;
  subtotal: number = 0;
  total: number = 0;
  lastVal:number = 0;

  products:any = [];
  dProduct:any = [];

  today = new Date();
  saleNo: number = 0;
  
  constructor( private product:ProductService ) { }

  ngOnInit() {
  	this.product.currentProduct.subscribe(newdata => {
  		// console.log(newdata)  
  		if (newdata) {
        this.products.push(newdata);
        this.pitem = 1;
  			this.item++;
        this.price = newdata['price'];
	  		this.amount = this.amount + + <number>newdata['price'];
	  		this.vat = this.vat + + <number>this.getVat(newdata['price']);
	  		this.diss = this.diss+ + <number>this.getDiss(newdata['price']);
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

  incre(p, index){
    this.item++;
      this.pitem = parseInt(document.getElementById("pcount"+index).value);
      this.lastVal = this.pitem + 1;
      document.getElementById("pcount"+index).value = this.lastVal;
      this.amount = this.amount + parseInt(p.price);
      this.subtotal = p.price * this.lastVal;
      document.getElementById("ptotal"+index).innerHTML = `${this.subtotal} EUR`;

      this.total = this.getTotal;
  }

  decre(p, index){
    this.pitem = parseInt(document.getElementById("pcount"+index).value);
    this.lastVal = this.pitem - 1;
    if (this.lastVal >= 1) {
      this.item--;
      this.amount = this.amount - parseInt(p.price);
      document.getElementById("pcount"+index).value = this.lastVal;
      this.subtotal = p.price * this.lastVal;
      document.getElementById("ptotal"+index).innerHTML = `${this.subtotal} EUR`;

      this.total = this.getTotal;
    }
  }

  onCancel(){
    this.products = [];
    this.item = 0;
    this.pitem = 1;
    this.price = 0;
    this.amount = 0;
    this.vat = 0;
    this.diss = 0;
    this.total = 0;
  }

  onRemove(p, index){
    let pitem = document.getElementById("pcount" +index).value;
    let pamount = p.price * pitem;
    console.log(this.vat);
    console.log(p.price);
    this.item = this.item - pitem;
    this.amount = this.amount - pamount;
    this.vat = this.vat - this.getVat(pamount);
    this.diss = this.diss - this.getDiss(pamount);
    this.total = this.total - pamount;

    this.products.splice(index, 1);

  }

 onDialogOpen() {    
    if(this.products == ''){
      alert('There is no product...')
    } else {
      let newProd = [];
      this.dProduct = [];
      
      this.saleNo = Math.floor(Math.random()*1000);

      this.products.forEach((item, index) => {
        newProd['name'] = item['name'];
        newProd['quentity'] = document.getElementById("pcount"+index).value;
        newProd['price'] = item['price'] * document.getElementById("pcount"+index).value;
        
        this.dProduct.push({name: newProd['name'], quentity: newProd['quentity'], price: newProd['price']});
      
      });
      console.log(this.dProduct);

      document.getElementById("myDialog").showModal(); 

    }
  } 
  onDialogClose() { 
    document.getElementById("myDialog").close(); 
  } 
}
