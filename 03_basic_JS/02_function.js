//When we do not know the number of the parameter in a function
function CalculateCarPrize(num1) {
    return num1;
}
console.log(CalculateCarPrize(200,300,400,500));//op=> 200
//To avoid this situation

//...num2 is a rest operator.
function CalculateCarPrize2(...num2) {
    return num2;
}
console.log(CalculateCarPrize2(200,300,400,500));//give a array

function CalculateCarPrize3(val1,val2, ...num3) {
    return num3;
}
console.log(CalculateCarPrize3(200,300,400,500));
//val1=200,val2=300 so ...num3 have except value that is [400,500]

//How to use object in function or how to pass object in function.
const user ={
    userName : "Purna",
    age : 20
}
function handleObject(anyObject) {
    console.log(`User name is ${anyObject.userName} and age is ${anyObject.age}`); 
}
handleObject(user);
//We can also pass object directly
handleObject({
    userName : "Sham",
    age : 21
});


////How to use array in function or how to pass array in function.
const myNewArray = [200,300,400,500];

function returnArray2ndVal(getArray) {
    return getArray[1];
}
console.log(returnArray2ndVal(myNewArray));
//We can also pass array directly
console.log(returnArray2ndVal([22,33,44,55,66]));


//My experement.***************************
const arr2 = [22,33,44,55,66,"PK"];
function test2(getArr2) {
    console.log(`Student is ${arr2[0]} and name ${arr2[5]}`);
}
test2(arr2);
