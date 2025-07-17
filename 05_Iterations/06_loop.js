const codding = ["js","rubby","python","java","cpp"];

//orEach( (item) => {}); this process is called 'call back'
const value = codding.forEach( (item) => {
    console.log(item);
    //to return manually the value of 'value'
    return item;
})
//this process gives op undefined
//Because foreach does not return any value
console.log(value);


const nums = [9,3,1,7,2,5,3,4,6,10];
//filter return value
//Process : 1
const val = nums.filter( (roll) => roll > 4);
console.log(val);

//Process : 2
const val2 = nums.filter( (roll) => {
   return roll > 4;
})
console.log(val2);

//Process : 3 (using foreach loop)
const myNums = [];
nums.forEach( (roll) => {
    if(roll > 4)
    {
        myNums.push(roll);
    }
})
console.log(myNums);


