import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    var array: Array<any> = [];
    this.route.params.forEach(p=>array.push(p));
  }

  private getProducts(id:number){

  }

}
