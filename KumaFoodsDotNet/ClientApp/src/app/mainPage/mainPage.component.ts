import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent implements OnInit {

  searchresult: string[];
  constructor() { }

  ngOnInit() {  }

  searchFoodHandler() {

  }

}
