// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//here arr is object , and object refers in which variable loop work here it is arr.
for (const num of arr ) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == ' ')
    {
        console.log("Space is detected");
        continue;
    }
    console.log(`Each char is ${greet}`)
}

// Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }