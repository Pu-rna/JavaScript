//undefined data type. and JS internaly define variable store a number type data. 
const score = 80;
console.log(score);


const amount = new Number(100);
console.log(amount);
console.log(amount.toString());
console.log(amount.toString().length);
console.log(amount.toFixed(2));

const number1 = 23.895;
console.log(number1.toPrecision(3));
const number2 = 123.895;
console.log(number2.toPrecision(3));
const number3 = 1123.895;
console.log(number3.toPrecision(3));

const salary = 1000000;
console.log(salary.toLocaleString());//comas are using in US standard.
console.log(salary.toLocaleString('en-IN'));//now coma is using in Indian standard.


//*****************MATHS***************************//
console.log(Math);
console.log(Math.abs(-1));//=>1, abs => absolute value : make only negative number to positive.
console.log(Math.round(4.6));//=>5
console.log(Math.ceil(4.2));//=> 5
console.log(Math.floor(4.9));//=> 4
console.log(Math.min(8,6,1,7,4));
console.log(Math.max(8,6,1,7,4));
console.log(Math.random());//value always within 0 to 1 
console.log(Math.random() * 10);//suppose we have to calculate the value from 1 to 10
console.log((Math.random() * 10) + 1);//to avoid 0.0098.. like this type of value. now the value can not be 0
console.log(Math.floor(Math.random() * 10) + 1);//some time we use floor or celi to get desire op.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));









