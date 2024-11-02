function addition(a,b)
{
    return a+b;

}


var sub = (a,b) =>{
    return a-b
}

var mul = (a,b) => a*b


console.log(sub(5,1))
console.log(mul(5,8))
let result = addition(4,88)
console.log(result)


console.log('now callback\n')


function callback()
{
    console.log("adding is succefull ");
}


let add = function(a,b, callback)
{
    let result = a+b;
    console.log('result ' + result);
    callback();
}

// add(34,23 , callback)

add(4,23,() => console.log('added successfully'))



import { age } from './nots.js';



//onst agee = agee;

let agee = age + 43;

console.log(agee)
