// Spread Operator(Three dots)
function doSomething(a,b,c,d,e){
    console.log(a,b,c,d,e)
}
var a = [1,2,3,4,5]
// doSomething(a[0],a[1],a[2],a[3],a[4])    
doSomething(...a)