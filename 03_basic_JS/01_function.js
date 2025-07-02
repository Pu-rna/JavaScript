//Syntax of Function

function funName() {
    console.log("P");
    console.log("U");
    console.log("R");
    console.log("N");
    console.log("A");
}
//to call and execute the function
funName();

// function addTwoNum1(number1,number2) {
//     console.log(number1 + number2);
// }
// addTwoNum1();//op=> NaN(not a number)
// addTwoNum1(3,4);//=> 7
// addTwoNum1(3,"4");//=>34
// addTwoNum1(-3,"4");//-34
// addTwoNum1(9,"-9");//9-9
// addTwoNum1(3,null);//3
// addTwoNum1(3,"a");//=>3a, But this is a problem.

// const result1 = addTwoNum1(4,5);//9
// console.log("Result :",result1);//undefined

//To fixed this problem
function addTwoNum2(num1,num2) {

    // let result = num1 + num2;
    // return result;

    //OR

    return num1+num2;
    
    //no any other line would be executed after this return statement.
    console.log("PK");//not executed this line.
}
const result2 = addTwoNum2(8,9);
console.log(result2);


function loginUserMessage(userName) {
    //if(!userName)
    //OR
    if(userName === undefined)
    {
        console.log("Please enter a userName!");
        return
    }
    return `${userName} just logged In.`
}
console.log(loginUserMessage("Purna"));
console.log(loginUserMessage(" "));
console.log(loginUserMessage());//undefined just logged In.

//we set the default value as sam ,so undefined never shown
function loginUserMessage2(userName = "sam") {
    return `${userName} just logged In.`
}
console.log(loginUserMessage2("Purna"));//here default value(sam) is overridden.
console.log(loginUserMessage2(" "));
console.log(loginUserMessage2());//sam just logged In.


