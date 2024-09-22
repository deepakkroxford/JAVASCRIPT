let promise1 = new Promise(function (resolve, reject) {
    console.log("i am the promise")
    // now the promise is in the pending state
    //Promise {<pending>}
})

let promise2 = new Promise((resolve, reject) => {
    console.log("the promsie is now resolved")
    resolve(1234)

    /*
 
 Promise {<fulfilled>: 1234}
 [[Prototype]]
 : 
 Promise
 [[PromiseState]]
 : 
 "fulfilled"
 [[PromiseResult]]
 : 
 1234
    */
})

