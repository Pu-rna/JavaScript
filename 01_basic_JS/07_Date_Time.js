//Date ***********************

let myDate = new Date();
console.log(myDate);//2025-06-23T11:04:51.789Z
console.log(myDate.toDateString());//Mon Jun 23 2025
console.log(myDate.toString());//Mon Jun 23 2025 11:04:51 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());//2025-06-23T11:04:51.789Z
console.log(myDate.toJSON());//2025-06-23T11:04:51.789Z
console.log(myDate.toLocaleDateString());//6/23/2025
console.log(myDate.toLocaleString());//6/23/2025, 11:04:51 AM
console.log(myDate.toLocaleTimeString());//11:04:51 AM
console.log(myDate.toTimeString());//11:08:04 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());//Mon, 23 Jun 2025 11:08:04 GMT

console.log(typeof myDate);//imp** for interview

let myCreatedDate = new Date(2025,0,5);// In js months start with 0
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2025,0,5,24,15,60);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-01-15");//in that case months start with 1
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("12-04-2025");//in India this rule is followed more
console.log(myCreatedDate4.toLocaleString());
console.log(myCreatedDate4.toDateString());


//Time stamp*************
let myTimeStamp = Date.now();//Returns the number of milliseconds elapsed since midnight, 
                            // January 1, 1970 Universal Coordinated Time (UTC).
console.log(myTimeStamp);
console.log(myCreatedDate4.getTime());

console.log(Math.floor(Date.now()/1000));//convert this milliseconds value into second by deviding with 1000.
                            //and to avoid decimal value we use (math.float)

let newDtate = new Date();
console.log(newDtate.getTimezoneOffset());
//Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer.

console.log(newDtate.getUTCDate());
//Gets the day-of-the-month, using Universal Coordinated Time (UTC)

console.log(newDtate.getMonth() + 1);//because months start from 0

//also use string interpolation 
//`${newDtate.getDate()} and the time is`............

newDtate.toLocaleString('default',{
    weekday: 'long'
})
console.log(newDtate);



