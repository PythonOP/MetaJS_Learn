var person = {}
person.name = "dinesh"
person.age = 65

//Object methods
person.eats = function(){
    console.log(person.name+" is eating.");
}

//call
person.eats()

//OOP Introdunction without classes
var car = {
    name:'Tesla',
    model:'Model S',
    driven:function(){
        return 25000;
    }
}
console.log(car.name)
console.log(car.model)
console.log(car.driven())

//use of this keyword
let person = {
    name:'Sundar',
    age:56,
    info:function(){
        console.log(this.name,' is ',this.age,' years old.')
    }
}
person.info()


