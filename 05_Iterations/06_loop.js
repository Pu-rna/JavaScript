const codding = ["js","rubby","python","java","cpp"];

//ForEach( (item) => {}); this process is called 'call back'
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


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBook = books.filter ( (bk) => bk.genre == 'History');
  console.log(userBook);

  //const userPublish = books.filter( (bk) => bk.publish >= 2000);
  //OR
  const userPublish = books.filter( (bk) => { return bk.publish >= 2000});
  console.log(userPublish);
  
  const historyBook = books.filter((bk) => {
    return bk.genre == 'Science' && bk.publish >= 2000
  });
  console.log(historyBook);
  
  


