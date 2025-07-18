const myNums = [1,2,3,4,5,6,7,8,9,10];

//Using of map
//console.log(myNums.map( (num) => num + 10));
//OR
const newNums = myNums.map( (num) => num + 10);
console.log(newNums);

//When we use multiple method thats call chaining
//The first num(in the first line map value) value pass through the 2nd map method
const numbers = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(numbers);


