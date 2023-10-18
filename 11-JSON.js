// Moving data in the web

//String to JSON
const jsonstr = '{"greetings":"hello"}'
const jsonObj = JSON.parse(jsonstr)
console.log(jsonObj)
console.log(jsonObj.greetings)

//JSON Object to string
const person = {
    firstName:'Sam',
    lastName:'Dunk',
    age:'23'
}
const jsonObj2 = JSON.stringify(person)
console.log(jsonObj2)