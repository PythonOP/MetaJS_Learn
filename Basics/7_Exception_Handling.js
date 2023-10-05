// try catch blocks
// Use of throw 
try{
    throw new ReferenceError();
}   catch(err){
    console.log(err);
}
console.log("Test")

// console.log(a+b);
// console.log("This line is never reached");


try{
    console.log(a+b);
}   catch(err){
    // console.log(err);
    console.log("Error found");
}