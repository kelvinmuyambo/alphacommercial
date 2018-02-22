import { Component, OnInit } from '@angular/core';
import { ProductManager } from "./../../ts/product-manager";
import { Product } from '../../ts/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Array<Product>;
  constructor() {
    var manager = new ProductManager();
    this.products = manager.getProducts();
  }

  ngOnInit() {
    this.getSlogan();
    this.interval = setInterval(() => {
      this.getSlogan();
      this.count ++;
    }, 200);
  }
  
  interval: any;
  slogan : string;
  slogan1 : string = "Browse through our vast selection of  merchandise!";
  count : number = 0;
  getSlogan() {
    var temp = this.slogan1.split("").slice(0,this.count);
    this.slogan = temp.join("");
  }

}
