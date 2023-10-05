// The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism.
class car{
    constructor(color,speed){
        this.color = color
        this.speed = speed
    }

    //In classes, there is no need to mention function keyword before the function name
    //This is  a class method
    drive(){
        console.log('The',this.color,'car is running at',this.speed,'kmph');
    }
}
var obj = new car('red',25)
obj.drive()

//Create method ***
var obj2 = Object.create(car)

//Inheritance
class BrandCar extends car{/*Car code inherited*/}
var obj3 = new BrandCar('BMW',100)
obj3.drive()

//Prototype is an object that can have properties to be shared by multiple other objets
var bird = {
    canFly:true
}
var eagle = Object.create(bird)
console.log(eagle.canFly)

//Change
var elephant = Object.create(bird)
elephant.canFly = false
console.log(elephant.canFly)

// Object.keys(), Object.values(), and Object.entries()
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))