// promise future me jake complete hota hai...
// it is a Object having eventual complition... 

const promiseOne = new Promise(function (resolve, reject){
    // Promise can complete in future...
    // Do an async task 
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
});

// same as upper... 
new Promise(function (resolve, reject){
    setTimeout(function (){
        console.log("Async complete 2")
        resolve();
    }, 1000)
}).then(function (){
    console.log("Promise consumed 2")
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve({username: "Chai", email : "example@gmail.com"});
    }, 1000);
})

promiseThree.then(function (user){ // user khud se lelo object ko access karne ke liye...
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function (){
        let error = false; // main...
        if(!error){
            resolve({username : "Rithik", gmail : "rithik@gmail.com"})
        }else{
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username;
})
.then((username) => { // yaha uper jo ham return kar rahe hain wahi value aayegi...
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => { // default..
    console.log("The promise is either Resolve or Rejected... All's Good");
})


const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function (){
        error = false;
        if(!error){
            resolve({username : "Javascript", password : "1234"})
        }else{
            reject("Error: JS went wrong");
        }
    }, 1000);
})

// async await...
async function consumePromiseFive(){
    // try catch block...
   try {
    const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive();


async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
   } catch (error) {
    console.log(error);
   }
}
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})