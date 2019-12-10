import { Component } from '@angular/core';
// JOSC.Start own Model
import { Repository } from './models/repository';
import { Food } from './models/food.model';
// JOSC.Stop own Model
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // JOSC.Start own Model
    constructor(private repo: Repository) {}
    get food(): Food {
      return this.repo.food;
    }
    // JOSC.Stop own Model
  title = 'SportsStore';
}
