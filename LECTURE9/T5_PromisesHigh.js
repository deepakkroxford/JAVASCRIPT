const promise1 = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography,network
    setTimeout(function () {
        console.log('async task is complete')
        resolve()
    }, 2000)
})

promise1.then(function () {
    console.log('promise consumed')
})

console.log("hi the next will start")


//other way to create the promise

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("this is other way to create the promise ")
        resolve();
    }, 2000);
}).then(function () {
    console.log("another way to consumed")
})

//this our third promise and here we learn how to pass the parametr in the resolve method
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Deepak Kumar singh', email: "deepakkr.oxford@gmail.com" })
    }, 2000)
})
//when we use then and passes parameter in the resolve method so can expect data and we can also print the data 
promise3.then(function (username) {
    console.log(username)
})

//this is the fourth promise and here we learn if we get any error
//so how we consume of resove this 
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve({ username: 'Deepak Kumar singh', email: "deepakkr.oxford@gmail.com" })
        }
        else {
            reject('Error:Something went wrong')
        }
    }, 3000)
});

// this is the concept of the promise chaining
promise4.
    then(function (user) {
        console.log("user is succesful enterd")
        return user.username;
    }).
    then(function (username) {
        console.log(username)
    }).
    catch(function (error) {
        console.log("error happend")
    }).
    finally(() => {
        console.log("the promise is either resolved and rejected")
    })

/*
The then function is directly connecte to the resolve function 
when we want to consume the function so we can use the resove 
if our promise get rejecte then we have to use the Catch() mehtod to 
resolve it and we can aslo use Finally()

so the finally block will execute evey time even the promise is resolved
or the rejected
*/


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let success = false;
        if (success) {
            resolve({ username: 'Deepak Kumar singh', email: "deepakkr.oxford@gmail.com" })
        }
        else {
            reject('Error:Happen in the js code')
        }
    }, 3000)
})

async function consumePromiseFive() {

    try {
        const response = await promise5
        console.log(response);
    }
    catch {
        console.log("error") 
    }
}
consumePromiseFive();


//this is how we can feth the data in jason format
async function getAlluser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log('E', error)
    }
}
getAlluser();

//now using then and cath block how we can do this same work
fetch('https://jsonplaceholder.typicode.com/users').
    then(function (response) {
        return response.json;
    }).
    then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.log(error)
    })

/*
practice with our own logic

Task: Simulate an Asynchronous Data Fetch
You need to simulate fetching user data from a database or server.
The task is to create a Promise that:
Resolves if the data is successfully "fetched" (simulated).
Rejects if there's a "failure" in fetching the data.
*/

let practice1 = new Promise(function (resolve, reject) {
    let success = Math.random() > 0.5
    setTimeout(function () {
        if (success) {
            resolve({ name: "John Doe", age: 25, job: "Developer" });
        }
        else {
            reject('failed to fethch the userdata')
        }
    }, 3000)
})

practice1.then(function (data) {
    console.log("the user data is ", data)
}).
    catch(function (error) {
        console.log("error happend during fetching the data ")
    })


/*
Task: Simulate an Asynchronous Login
You need to simulate a login process where a user enters their credentials. Create a Promise that:

Resolves with a success message if the login is successful (e.g., correct username and password).
Rejects with an error message if the login fails (e.g., incorrect credentials).
*/
function loginuser(username, password) {
    return new Promise(function (resolve, reject) {
        const correctusername = "user123"
        const correctpassword = "pass123"
        setTimeout(() => {
            if (username === correctusername && password === correctpassword) {
                resolve('login successfull welcome' + username)
            }
            else {
                reject('login password is faliled')
            }
        }, 1000);
    })
}

loginuser("user123", 'passs123')
    .then(function () {
        console.log(message)
    }).
    catch(function (error) {
        console.log(error)
    })




