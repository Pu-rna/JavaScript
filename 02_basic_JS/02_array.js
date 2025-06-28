const flower = ["Rose","Jesmin","Sunflower","Lotus"];
const frute = ["Mango","Banana","Apple","Jamun"];

//In that case  the output become array between array.And this is a problem.
//Because array take all the data as a entry data.(Means we can store different data into array,like: string,
//  boolean, number,array) So this flower array take the frute array as a data element or as an single data.
//So in that case flower array has 5 elements.
//flower.push(frute);
//console.log(flower);
//console.log(flower[4][0]);//This is not a right process.


//Concat : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//const allItem1 = flower.concat(frute);//This is also
//console.log(allItem);

//Another important method : spread
//By using ... or spread method the array elements become individual element. So op give a spread out value.
const allItem2 = [...flower,...frute];
console.log(allItem2);


//Flat : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const anotherArr = [1,2,3,[4,5,6],7,[8,9,10,[11,12]]];
//In this array depth is 3. So we can give infinity to concat all the array in any depth.
const usable_array = anotherArr.flat(Infinity);
console.log(usable_array);


//When we use data scraping or select data from a web page, some time data come in different format, like: node list,
//object,string. But we want array. So in that case we can convert the data into array or we can aslo check the data 
// is arrray or not.
console.log(Array.isArray("Purna"));//checking
console.log(Array.from("Purna"));//convert
console.log(Array.from({name : "Purna"}));
//An iterable object to convert to an array.Can not convert this into array so given a empty element.

let score1 = 1000;
let score2 = 2000;
let score3 = 3000;
//of : Returns a new array from a set of elements.
console.log(Array.of(score1,score2,score3,score1));


