var str = "hello "
console.log(str.concat('World'))
console.log(str.length) //6 including space
console.log(str.charAt(0)) //h
console.log("Wo".concat("rl").concat("d")) //World
console.log("someString".indexOf("s")) //0

console.log("hey there how is it going ?".split(" ")) // split and returns a array of items
console.log("hey".toUpperCase()) //HEY
console.log("HEY".toLowerCase()) //hey


// Match method is used to find chars in strings
var s = "abc";
console.log(s.match(/a/)) //returns an array of certain details 
console.log(s.match(/d/));  //returns null