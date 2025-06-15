//this are some basic comparison, and there is no problem occure.
//Because both the value's type are same like (number> number).
console.log(2 > -1);
console.log(2 >= 9);
console.log(2 < 8);
console.log(2 <= 8);
console.log(2 != 8);
console.log(2 == 8);

//some type this type of comparison don't give predictable value.
//so avoid comparison in different data type.
console.log("2" > 1);
console.log(false <= 2);


//The reason is that an equality check == and comparison < <= > >= work defirently.
//Comparison convert null to a number, treating it as 0,
// that's why (3)null >= is true and (1)null > is false.
console.log(null > 0); //=> false
console.log(null == 0);// => false
console.log(null >= 0);// => true


console.log(undefined > 0); //=> false
console.log(undefined == 0);// => false
console.log(undefined >= 0);// => false

//*******//
//Strict check:
//it give true because in that case conversion happen.
console.log("8" == 8);//=> true

//But when we check with === then conversion doesn't happen.
//Then === check the data type.
console.log("8" === 8);// => false

