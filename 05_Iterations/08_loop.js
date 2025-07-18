// Syntax of Reduce Method
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
//In the first loop accumulator value is the initialvalue , that is 0
//After the first loop accumulator value is the value of "accumulator+currentValue"
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10



const myNum = [1,2,3];

const myTotal = myNum.reduce(function (accumulator,currentValue) {
    console.log(`acc: ${accumulator}, currVal: ${currentValue}`);
    return accumulator + currentValue;
},0);
console.log(myTotal);

//Using arrow function
const myTotal2 = myNum.reduce((acc,currVal) => acc+currVal , 0);
console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);

