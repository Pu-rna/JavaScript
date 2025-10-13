//create promise
const promiseOne = new Promise(function(resolve, reject) {
    //Do an asynchronous task
    //Database calls, cryptography, network
    setTimeout(function() {
        console.log("Asynchronous task is complete");
        resolve();
    }, 1000)
}) 

//consume promise
//.then has a direct connection with resolve
//under .tnen there is a function or call back which recive an argument whatever done in create promise portion
promiseOne.then(function() {
    console.log('promise consumed.');
})


//without taking any variable
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 complete.");
        resolve();
    },1000)

}).then(function() {
    console.log("Promise 2 consumed.");
})