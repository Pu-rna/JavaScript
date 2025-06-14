let score = 20;
//both are same command and give same value => number
console.log(typeof score);
console.log(typeof (score));


let marks = "20";
console.log(typeof marks); //output is => string
let valueInNumber = Number(marks);
console.log(typeof valueInNumber);//op is => number
console.log(valueInNumber);//it convert the string into number.


let id = "22ab";
let valueId = Number(id);
console.log(typeof valueId);//op is => number
console.log(valueId);//op is => NaN(Not a Number)

let temp = null;
console.log(typeof temp); //=> object
console.log(temp);// => null

let dept = undefined;
console.log(typeof dept); //=>undefined
console.log(dept);//=>undefined

let name = 65;
let valueInString = String(name);// convert the number value into string,
console.log(typeof valueInString); //op is => string
console.log(valueInString);// op is => 65

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); //convert the number value into boolean
console.log(typeof booleanIsLoggedIn);//=> boolean
console.log(booleanIsLoggedIn);// => true

let isString = "";//when no space
let stringBoolean = Boolean(isString);
console.log(typeof stringBoolean);//=>boolean
console.log(stringBoolean);//=>false

let isString2 = "  ";//when  space
let stringBoolean2 = Boolean(isString2);
console.log(typeof stringBoolean2);//=>boolean
console.log(stringBoolean2);//=>true

let isString3 = "Purna ";//string
let stringBoolean3 = Boolean(isString3);
console.log(typeof stringBoolean3);//=>boolean
console.log(stringBoolean3);//=>true