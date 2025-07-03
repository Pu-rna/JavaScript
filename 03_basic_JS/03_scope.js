var c = 300;//(Do not use 'var')

//Global Scope
let a = 100;

if(true) {
    //Block Scope
    const a = 10;
    let b = 20;
    c = 30;
    console.log("INNER a: ",a);
    
}
console.log("OUTER a:",a);
//console.log(b);//Give erroe because the concept of Block scope
console.log(c);//It does not give error 
// op=>30(dont give 300 and it is a problem for that reason we do not use 'var')
//Variables declared with the var keyword can NOT have block scope.
//Variables declared inside a { } block can be accessed from outside the block.


