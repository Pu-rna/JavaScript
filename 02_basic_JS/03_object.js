//We can declare  object in two way: 1) literals 2) constructor.

//Singleton : Singleton design pattern exposes a single instance that can be used by multiple components.
//When declare object as constructor then singleton  create
//  Object.create;  //object declaration as constructor, when singleton create.

//But when we declare object as literal then singleton does not create.

//In object there is two item: 1)key [like: name], 2)value [like: purna]
//In object when we declare any key like: name, then js internaly treat it as string "name".
//And under the key we can store any type of value, like: number,string,array etc.
const jsUser = {
    name: "Purna",
    "full name": "Purna Kundu",
    age: 21,
    location: "Hooghly",
    email: "purna@gmail.com",
    IsLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"],
    marks: [1,2,3,4,5,6]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); //we can not access "full name" using (.full name) method.

jsUser.email = "pkundu@4545gmail.com";//override the value
console.log(jsUser["email"]);

Object.freeze(jsUser);//freeze the object, we can not make any change in this object.
jsUser.email = "purna@chatgpt.com";//we can not get any error but the changes does not propagate.
console.log(jsUser["email"]);//print the previous email value.



//## Who to declare a symbol and use as a key in a object????????

const mySymbol = Symbol("key1");
const jsUser2 = {
    name: "Purna",
    //mySymbol: "myKey1",
    [mySymbol] : "mykey2",
    "full name": "Purna Kundu",
    age: 21,
    location: "Hooghly",
    email: "purna@gmail.com",
    IsLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]
}
console.log(jsUser2);

//console.log(jsUser2.mySymbol);//this is not the right process.
//console.log(typeof(jsUser2.mySymbol));//output is string not a symbol.

console.log(jsUser2[mySymbol]);//right process. 
console.log(typeof mySymbol); //op=> symbol
//**********typeof jsUser2[mySymbol] returns "string" because 
// the value stored at the symbol key is a string, not the symbol itself.******//
console.log(typeof(jsUser2[mySymbol])); //op => string 



