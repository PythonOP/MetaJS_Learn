// The rest operator, on the other hand, is used to build a smaller box, and pack items into it. 
var places = [
    'India',
    'Ireland',
    'Australia',
    'England',
    'West Indies',
    'Ireland',
    'Nepal'
]
const [first,second,third,...restAll] = places
console.log(second)
console.log(restAll)




//Joins arrays using Rest
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array


//Adding new elements without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);


//Convert a string to array of chars
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']



// Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201

console.log(car1.speed, car2.speed)