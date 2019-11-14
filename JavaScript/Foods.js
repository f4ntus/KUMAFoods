class food{
    constructor(parName,parPicture,parDescription,parNutritiveValues){
        this.name = parName;
        this.picture = parPicture;
        this.description = parDescription;
        this.NatritiveValues = parNutritiveValues;
    }
}

class NutritiveValue {
    constructor(parglucose, parlactose, parfructose){
        this.glucose = parglucose;
        this.parlactose = parlactose;
        this.parfructose = parfructose;
    }
}

function getFoods(){
    let test [
        {
            name :'tedst',
            picture: 'asdf.jpg'
        },
        gurke {

        }
    ]
    test.filter((x) => {
        return x.name = "tedst"
    })
    return {
        Parika: food(Paprika,paprika.png,blabla,new NutritiveValue(10,20,30)),
        Gurke: food(Gruke,gurke.png,balsdfsdf,new NutritiveValue(10,20,30)),
        Tomate: food(Tomate,tomate.png,balsdf,new Tomate(56,42,32))
    }
}