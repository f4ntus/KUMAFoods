function searchFoods(searchString) {
    console.log("hello Wolrd");
    let myfoods = getFoods();
    console.log(searchString);
    var result = myfoods.filter(X => X.name == searchString);
    console.log(result);
    generateSearchResultTable(result);
}

function generateSearchResultTable(foods){
    let HTMLString;
    foods.forEach(food => {
        HTMLString =  "<tr> <th>" + food.picture + "</th> <th>" + food.name + "</th> <th>" + food.description + "</th> </tr>";
    });
    HTMLTable = document.getElementById("SearchResultTable");
    HTMLTable.innerHTML = HTMLString;
}

function getFoods(){
    foods = [
        {
            "name": "Paprika", 
            "picture": "paprika.jpg",
            "description": "basdfladsf",
            "glucose": "10",
            "fructose": "20",
            "lactose": "25"
        },
        {
            "name": "Gurke",
            "picture": "gurke.jpg",
            "description": "basdfladsf",
            "glucose": "10",
            "fructose": "20",
            "lactose": "25"
        },
        {
            "name": "Karotte",
            "picture": "Karotte.jpg",
            "description": "basdfladsf",
            "glucose": "10",
            "fructose": "20",
            "lactose": "25"
        },
        {
            "name": "Gurke", 
            "picture": "paprika.jpg",
            "description": "basdfladsf",
            "glucose": "10",
            "fructose": "20",
            "lactose": "25"
        }]
    return foods;
}