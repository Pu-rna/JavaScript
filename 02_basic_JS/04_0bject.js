//Declear object using constructor

//This is a singleton object
const tinderUser1 = new Object();
console.log(tinderUser1);

//This is a non singleton object.
const tinderUser2 = {};
tinderUser2.id = "123abc";
tinderUser2.name ="Purna";
tinderUser2.isLoggedIn = false;
console.log(tinderUser2);
//All this key now store in array format(use Case: we can use it in loop)
console.log(Object.keys(tinderUser2));
//also we can calculate values
console.log(Object.values(tinderUser2));
//store array within array like:   [['key','value'],['key','value'],['key','value']]
console.log(Object.entries(tinderUser2));
//checking
console.log(tinderUser2.hasOwnProperty('isLoggedIn'));



//Object within object
const newUser = {
    email : "purna8765@gmail.com",
    name : {
        fullName : {
            firstName : "Purna",
            lastNmae : "Kundu"
        }
    }
}
console.log(newUser.name);
//Also we can access object under object
console.log(newUser.name.fullName.firstName);

//How to merge two object*******************

//in that case obj1 and obj2 merge in obj3 as 2 individual obj just like array. 
// But we want to merge the value or element of obj1 and obj2.
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {obj1,obj2};
console.log(obj3);

//To solve that problem
const obj4 = Object.assign({},obj1,obj2);
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//We give here a empty {} to ensure that all the object marge and return a target object. Here target object is {} 
// and  source object are obj1 , obj2. THis {} is not mandatory but a good practice, if we do not give {} then target became obj1 means all the elements of obj1 and obj2 are store in obj1.
console.log(obj4);

//Short cut : we use spread operator.
const obj5 = {...obj1,...obj2};
console.log(obj5);

//When value come from database
//array-object
const user = [
    {
        id : "123zz",
        email : "pk@google.com"
    },
    {
        id : "123yyy",
        email : "mk@google.com"
    },
    {
        id : "123xxx",
        email : "uk@google.com"
    }
]
console.log(user[1].email);
