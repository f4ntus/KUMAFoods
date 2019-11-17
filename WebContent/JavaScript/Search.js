
function searchFoods() {

    searchString = document.getElementById('inputSearch').value;
    if (searchString == "") {
        swal("Kein Ergebnis!", "Geben Sie etwas in die Suche ein!", "error");
    } else {
        let result =  getFoods(searchString);  
        if(result.length < 1){
            swal("Kein Ergebnis!", "Es konnte kein Datensatz, der mit ihrer Suche übereinstimmt gefunden werden.", "error");
        } else{
            generateSearchResultTable(result);
        }
    }
}
function moveToDetails(foodName) {
    // get foodsArray and take the first on as objekt, foodName is unique --> there is only one Objekt in the Array
    console.log(foodName);
    foods = getFoods(foodName);
    food = foods[0];

    // Open the detailPage
    window.open("detailPage.html");

    // get the HTML elements and put the text form food Objekt inside
    document.getElementById("foodName").innerHTML = food.name;
    console.log(document.getElementById("foodName").innerHTML);
    document.getElementById("foodFructose").innerHTML = food.fructose;
    document.getElementById("foodLactose").innerHTML = food.lactose;
    document.getElementById("foodGlucose").innerHTML = food.glucose;

}

function generateSearchResultTable(foods) {
    let HTMLString;
    HTMLString = "<tr><th>Bild</th> <th>Name</th> <th>Beschreibung</th></tr>"
    foods.forEach(food => {
        HTMLString = HTMLString + "<tr onclick=\"moveToDetails('"+food.name+"')\"> <td>" + food.picture + "</td> <td>" + food.name + "</td> <td>" + food.description + "</td> </tr>";
    });
    HTMLTable = document.getElementById("SearchResultTable");
    HTMLTable.innerHTML = HTMLString;
    HTMLTable.style.visiblity = "visible";
}

function getFoods(searchString) {
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
    return foods.filter(X => X.name == searchString);
}