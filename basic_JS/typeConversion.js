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



//***************************  Operations **************************//

let value = 3;
let negValue = -value;
console.log(negValue);

//there are many type of operations like......
console.log(2+2);
console.log(2-2);
console.log(2*3);
console.log(2**4);
console.log(10/5);
console.log(12%5);

//also we can add string
let str1 = "Hello";
let str2 = " Purna";

console.log(str1+str2);//Hello Purna
//OR
let str3 = str1+ str2;
console.log(str3);//Hello Purna

//special case******
//!!!!We shouldn't use this type of messy operations.
console.log("1" + 2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"3");//33

console.log(true);//op =>true
console.log(+true);// whrn we increment the 'true' value it convert in number so op is => 1
console.log(+" ");//=>0
            
                //!!!!!!!!!!!!!!!!//

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

//also we can use prefix and postfix operator