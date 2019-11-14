function searchFoods(searchString){
   var myfoods = getFoods()
   console.log(myfoods)
}
function getFoods(){
    foods = [{
        "Paprika": {
            "picture": "paprika.jpg",
            "description": "basdfladsf",
            "glucose": "10",
            "fructose": "20",
            "lactose": "25"
        },
        "Gurke": {
            "picture": "gurke.jpg",
            "description": "basdfladsf",
            "glucose": "10",
            "fructose": "20",
            "lactose": "25"
        },
        "Karotte": {
            "picture": "Karotte.jpg",
            "description": "basdfladsf",
            "glucose": "10",
            "fructose": "20",
            "lactose": "25"
        },
        "Tomate": {
            "picture": "paprika.jpg",
            "description": "basdfladsf",
            "glucose": "10",
            "fructose": "20",
            "lactose": "25"
        }
    }]
    return foods;
}