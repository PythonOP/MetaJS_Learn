// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// function logDairy() {
//     for (var item of dairy) {
//         console.log(item)
//     }
// }
// logDairy()
const animal = {
    canJump: true
};

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