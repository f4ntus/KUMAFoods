function searchFoods() {
    searchString = document.getElementById('inputSearch').value;
    
    let myfoods = getFoods();
    var result = myfoods.filter(X => X.name == searchString);
    generateSearchResultTable(result);

}

function generateSearchResultTable(foods){
    let HTMLString;
    HTMLString = "<tr><th>Bild</th> <th>Name</th> <th>Beschreibung</th></tr>"
    foods.forEach(food => {
        HTMLString = HTMLString +  "<tr> <td>" + food.picture + "</td> <td>" + food.name + "</td> <td>" + food.description + "</td> </tr>";
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