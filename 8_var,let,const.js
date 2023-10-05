// var const let

// var can be accessed without initialization
var num
console.log(num)  //undefined

//var can be declared at any point of time(before accessing it)
var num1 = 10
var num1 = 20
var num1 = 30
console.log(num1)

//We cannot redeclare a let variable
let num2 = 10
// let num2 = 20       //error
console.log(num2)      //undefined if empty

//A const variable must be initialized
const num3 = 10
// const num3         //error