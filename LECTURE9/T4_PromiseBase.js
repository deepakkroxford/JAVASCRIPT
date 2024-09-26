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

/*
so we not create genraly it send by the api and all
we have to mange like if the task is successfull the what we want to do

so on that case we use to return some message if our promise is resolved
so we use then() method 

if our promise get rejected then we have to use the cath() method if our promise
get the error
*/

function asyncfunction1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("data1")
            resolve('success')
        }, 4000)
    })
}


function asyncfunction2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("data2")
            resolve('success')
        }, 4000)
    })
}


console.log("fetching data 1")
let p1 = asyncfunction1();
p1.then(function (res) {
    console.log(res);

    console.log("fetching data 2....")
    let p2 = asyncfunction2();
    p2.then(function (res) {
        console.log(res);
    })
})





/*
The promise will resoleved or reject 
*/

// const ans = new promise(function (resolved, reject) {
//     if (true) {
//         return resolved();
//     }
//     else {
//         return reject();
//     }
// })


// ans.then(function (res) {
//     console.log(res);
//     console.log("this is resilved")
// }).catch(function (error) {
//     console.log(error)
//     console.log("this promise will rejectt")
// })


//user will ask for a number between 0 to 9 if the 
//number is below 5 then resolve if not then reject

let number = Math.floor(Math.random() * 9);

let check = new Promise(function (resolved, rejected) {
    if (number < 5) {
        return resolved();
    }
    else {
        return rejected()
    }
})

check.then(function (res) {
    console.log(res);
    console.log("this is resolver")
}).catch(function (error) {
    console.log(error);
    console.log("this is rejected")
})


var ans = new Promise(function (res, rej) {
    return res("subse phle ghr p aao");
})

var p2 = ans.then(function (data) {
    console.log(data);

    new Promise(function (res, rej) {
        return res("gate kholo or gate")
    })
})


var p3=p2.then(function(data)
{
    console.log(data);
    return new Promise(function()
{
    return res("kahana pakao or kahan kahao")
})
})