import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prodData:any;
  validImage: true;


  constructor( private product:ProductService ) { }

  ngOnInit() {

  	this.product.getProducts().subscribe( res => {
  		
  		// console.log(res);
  		this.prodData = res;

  	}, err => {
  		console.log(err);
  	});

  }

  onAddProduct(data) {
  	console.log(data);
  	this.product.addToCart(data);
  }

  getImg(img) {
    if (img) {
      return '../../assets/images/'+img;
    }
    return '../../assets/images/dummy.jpg';

  }

}
