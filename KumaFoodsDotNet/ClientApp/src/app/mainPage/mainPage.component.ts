import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';
import { Food } from './../models/food.model';
import { Repository } from './../models/repository';

@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent implements OnInit {

  searchresults: Food[];
  constructor(private repo: Repository) { }

  ngOnInit() {  }

  searchFoodHandler() {
    this.repo.getFoods('Gurke');
    this.searchresults = this.repo.foods;
  }




}
