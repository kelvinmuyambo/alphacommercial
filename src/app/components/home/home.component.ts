import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
    this.getSlogan();
    this.interval = setInterval(() => {
      this.getSlogan();
      this.count ++;
    }, 200);
  }

  ngOnInit() {
  }
  
  interval: any;
  slogan : string;
  slogan1 : string = "We are an amazing...!!!!!!!";
  count : number = 0;
  getSlogan() {
    var temp = this.slogan1.split("").slice(0,this.count);
    this.slogan = temp.join("");
  }

}
