//Array

//NOTE: In js array elements can different type.
//also array size is resizable(we can change the size of the array after declaration)  ::::MDN

//Type of declaration of array
let array1 = [1,2,33,60,12,3.45,true,"Purna"];
let array2 = ["PK","SRK"];
const array3 = new Array(1,2,3,4,5);
console.log(array3[2]);

//Some Methods in array
let myArray = [2,4,6,8,10,12,14,16,18];
//console.log(myArray);

myArray.push(20);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(22); //in that case new element push in the first index of the array. 
                    // and all the array element index are changed.
console.log(myArray);
myArray.shift();//remove the first element of the array
console.log(myArray);
console.log(myArray.includes(8));
console.log(myArray.indexOf(8));
console.log(myArray.indexOf(90));//if index not exist in the array returns -1

const arrayJoint = myArray.join();
//Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arrayJoint);
console.log(typeof arrayJoint);

//slice and splice
const myArr = [0,1,2,3,4,5];
console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ",myArr);



