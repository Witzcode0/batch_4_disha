// class is a blueprint of an object

class car{
    constructor(name, color){
        // data member [attribute or properties]
        this.n = name;
        this.c = color;
        // console.log("This is a constructor!!!", name, color)
    };

    // member function
    carDetail(){
        console.log(`My can name is ${this.n}. And, my car color is ${this.c}`);
    }
}

// object
const car1 = new car("BMW", "Blue");
car1.carDetail();
const car2 = new car("BMW", "red");
car2.carDetail();
