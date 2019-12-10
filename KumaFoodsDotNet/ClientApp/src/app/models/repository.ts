import { Food } from "./food.model"
export class Repository {
    constructor() {
        // hier wird auf die Razer view drauf zugegriffen. Dies ist nur eine zwischenlösung. 
        // Eigentlich sollte es über einen HTTP gehen. 
        this.food = JSON.parse(document.getElementById("data").textContent);
    }
    food: Food;
}
