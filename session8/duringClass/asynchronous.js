
//simulating something that takes time
//it executes some code and then resolve or reject


//we then get the data that it gets back
new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve("hello");
    }, 4000);

}).then(message => {
    console.log(message + "s");
});


//we can make it promisbale, thenabale,
// create a fucntion that is wrappen with a promise

// function myPromise(){

//     return new Promise((resolve, reject) => {

//         try {
//             setTimeout(() => {
//                 resolve("bla bla ha")
//             }, 5000); 
//         } catch {
//             reject("not work");
//         }
//     });
// }



//how to call myPromise and handle the resolve and reject(.catch)
// myPromise()
// .then(message => console.log(message))
// .catch(errorMessage => console.log(errorMessage));


//async / await
// (async function myAsynchronousFunction() {
//     try {
//         const message = await myPromise();
//         console.log(message);
//     } catch (errorMessage) {
//         console.log(errorMessage)
//     }
// })()

//myAsynchronousFunction();

//solve the problem: await is only valid in async function























