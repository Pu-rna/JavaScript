//Two part:
//i) create promise
//ii) consume promise

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


//when a data come from network how to pass it using promises...
//Data Consumption....................................
const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve({username:"Purna", email:"purnakundu04@gmail.com"})
    },1000)
})

promiseThree.then(function(user) {
    //whatever value pass in resolve it code in here besause .then directly connect with resolve
    console.log(user);
})

//Uses o rejection..........................
const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({username:"Megha",password:1234})
        }else{
            reject('ERROR: somthing went wrong!')
        }
    },1000)
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username;
}).then((myUsername) => {       //this call chaining, whatever value come from previous .then add in this .then, use in database connection.
    console.log(myUsername);
}).catch(function(error) {
    console.log(error);
}).finally(() => {
    console.log("Promise is either resolve or rejected.");
})  


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username:"JavaScript",password:987});
        }else{
            reject("ERROR: JS went wrong!")
        }
    },1000)
})
//as a example some thime we does not want to move forward when database is not connected for some reason then we use this type of function.
//this async await function can not handle error directly.
//now this bellow code give error, to handle this we have to use try catch block.
// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive();

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);    
    }catch(error){
        console.log('ERROR!');
    }
}
consumePromiseFive();