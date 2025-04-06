const promiseOne = new Promise(function(resolve, reject){
    // Promise can complete in future...
    // Do an async task 
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

// .then is connection with resolve...
promiseOne.then(function(){
    console.log("Promise Consumed");
})

// Same...
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Chai", email : "example@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "hitesh", password : "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{ // default
    console.log("The promise is either resolve an rejected");
})