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

class a{}
class b extends a{
    constructor(){
        super()
        this.test = true
    }
}
var res = new b()
console.log(res.test)