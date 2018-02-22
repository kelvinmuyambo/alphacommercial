import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { 
    this.getSlogan();
    this.interval = setInterval(() => {
      this.getSlogan();
      this.count ++;
    }, 100);
  }

  ngOnInit() {
  }

  interval: any;
  slogan : string;
  slogan1 : string = "Make inquiries, Place your orders, Give us feedback!";
  count : number = 0;
  getSlogan() {
    if(this. count > this.slogan1.length + 20) this. count = 0;
    var temp = this.slogan1.split("").slice(0,this.count);
    this.slogan = temp.join("");
  }
}
