//for object use of forin loop
const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for array use of forin loop
const programming = ["java", "mysql","c", "python"];
for (const key in programming) {
    console.log(`${key} value is: ${programming[key]}`);
}

//Map is not iteratable so we can not use forin loop in it
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }