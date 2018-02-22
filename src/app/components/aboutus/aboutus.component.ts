import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() {
    this.getSlogan();
    this.interval = setInterval(() => {
      this.getSlogan();
      this.count++;
    }, 100);
  }

  ngOnInit() {
  }

  interval: any;
  slogan: string;
  slogan1: string = "Get to know us a better.";
  count: number = 0;
  getSlogan() {
    if (this.count > this.slogan1.length + 20) this.count = 0;
    var temp = this.slogan1.split("").slice(0, this.count);
    this.slogan = temp.join("");
  }
}
