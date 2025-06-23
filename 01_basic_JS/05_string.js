let name = "Purna";
let repo = 20;

//Do not use this type of old syntax.
//console.log(name +" has " + repo + " in gitHub");

//Use String Interpolation
console.log(`hello my name is ${name} and I have ${repo} repository in github.`);

//Another method to declare string by using js object.
const foodName = new String('Biriyani');
console.log(foodName);
//many methodes in string...
console.log(foodName[0]);
console.log(foodName.__proto__);//op=> object
console.log(foodName.length);
console.log(foodName.toUpperCase());//it does not change the original value. because it store in stack memory.
console.log(foodName.charAt(4));
console.log(foodName.indexOf('y'));

const newfoodName = foodName.substring(0,4);
console.log(newfoodName);

//we can give here - number too.
const anotherString = foodName.slice(-7,4);
console.log(anotherString);

//to avoid extra space
const newStringOne = "     Purna     ";
console.log(newStringOne);
console.log(newStringOne.trim());
//to remove starting value. also can remove ending value.
//also trim() can remove /n.
console.log(newStringOne.trimStart());

//suppose there is an url and between purna and kundu user gie=ven a space and browser represent it as %20.
//so we can remove it by using replace. 
const url = "https://purna.com/purna%20kundu";
console.log(url.replace('%20', '-'));
console.log(url.includes('purna'));
console.log(url.includes('megha'));

const newStringTwo = "Amazon-Web-Server-2025";
console.log(newStringTwo.split('-'));
