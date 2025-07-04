//Immediately Inveked Function Expression(IIFE)***********
//An IIFE, or Immediately Invoked Function Expression, 
// is a JavaScript function that is defined and executed immediately after its creation. 
// This pattern is often used to create a private scope for variables, 
// preventing them from polluting the global scope and avoiding naming conflicts. 

//This is called named IIFE (because it has a name (database))
(function dataBase() {
    console.log('Database Connected!!');
})(); //we should have to give ; to define that this is the end of this function

//it is called simple IIFE
( () => {
    console.log('Database Connected two!!');
}) ();

//simple or unnamed IIFE with parameter.
( (name) => {
    console.log(`Database of ${name} is connected!!`);
}) ('Purna');