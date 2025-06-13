"use strict"; //treat all JS code as a newer version.

//alert(3+3) // we using node.js not browser, so this syntax gives error.

console.log(3
    +3)  //don't write like that. Code readability should be high.

let name = "purna";
let age = 21;
let isLoggedIn = true;
let state;
let temperature = null;


//types of datatype....
//Number
//String => " " OR ' '
//BigInt
//boolean => true or false
//Null => standalone value : representation of empty value and it's type is object.
//Undefined => when value is not define
//symbol => is use for uniqueness
//object

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof state); //op: undefined
console.log(typeof temperature); //op: object
