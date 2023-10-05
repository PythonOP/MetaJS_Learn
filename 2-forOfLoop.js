
// for(properties of car){     //error because object properties are not iterable
//     console.log(properties)
// }

var colors = ['red','green','blue','yellow']
for(var color in colors){
    console.log(color)    // return indexes(in)
}
for(var color of colors){
    console.log(color);   //return values(of)
}


const car = {
    name:'bmw',
    speed:100
}
let obj = Object.create(car);
for(property in Object.keys(obj)){
    console.log(property)
}