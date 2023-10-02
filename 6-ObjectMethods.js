var person = {}
person.name = "dinesh"
person.age = 65

//Object methods
person.eats = function(){
    console.log(person.name+" is eating.");
}

//call
person.eats()