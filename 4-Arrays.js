// DataStructures and some useful functions
//forEach
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

//filter
const nums = [0,10,20,30,40,50];
var res = nums.filter( function(num) {
    return num > 20;
})
console.log(res)

//map
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})