// In ES6, `` backtick can be used to make strings 

//Variable interpolation
var num=10
console.log(`The num is ${num}`)

//Expressions
console.log(`${1+5}`)

// template strings can span multiple lines
let para = `Hi! My name is xyz
And I am working with the Dev Team
`
console.log(para)



// ---------------------------


const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for(prop of Object.entries(bird)){
        console.log(`${prop[0]}: ${prop[1]}`)
    }
}
birdCan()

function animalCan(){
    for(prop in bird){
        console.log(`${prop}: ${bird[prop]}`)
    }
}
animalCan()