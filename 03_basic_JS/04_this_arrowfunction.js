//THIS FUNCTION********
//Using of this function
const user = {
    userName: "Purna",
    price: 1999,
    welcome: function() {
        //This refer to the current context.
        console.log(`${this.userName} , welcome to website.`);   
        console.log(this);//print current context.      
    }
}
user.welcome();
//we change the context or the value of the object.
user.userName = "Megha";
user.welcome();

console.log(this);//empty because we are in node.js
//But when we try to run this in browser then it print the global object of google
//Like: window

function one() {
    console.log(this);
    //there is many global object in node.js which is print by this
}
one();

function two() {
    let userName2 = "Purna Kundu";
    console.log(this.userName2);//undefined
    //Because we can not use this in function like this.
}
two();

//ARROW FUNCTION*******
//Explict return 
const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

//Implict return in arrow function
const addTwo2 = (num1,num2) => num1 + num2;
console.log(addTwo2(3,4));
//object return using implict return method in arrow function
const nameArrow = () => ({userName: "Purna"});
console.log(nameArrow());
