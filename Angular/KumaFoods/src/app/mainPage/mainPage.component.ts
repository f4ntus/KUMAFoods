import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchFoods(value: any) {
    console.log(value);
  }

}
