import { Food } from './food.model';
import { Injectable } from "@angular/core"; 
import { HttpClient } from "@angular/common/http";

@Injectable()
export class Repository {
    food: Food;

    constructor(private http: HttpClient) {
        // hier wird auf die Razer view drauf zugegriffen. Dies ist nur eine zwischenlösung. 
        // Eigentlich sollte es über einen HTTP gehen. 
        //this.food = JSON.parse(document.getElementById("data").textContent);
        this.getFood('Gurke');
    }

    getFood(foodName: string) {
        this.http.get<Food>('/api/foods/' + foodName)
        .subscribe(f => this.food = f);
    }
}
