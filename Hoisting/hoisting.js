function one() {
    const username = 'Histesh';
    console.log("Parent function only");

    // Nested function can access variables from the parent function due to closure
    function two() {
        const website = 'youtube';
        console.log(username); // Accessing parent function's variable
    }

    // The following line will cause an error:
    // console.log(website);
    // Reason: 'website' is declared using const, which has block-level scope
}

one(); // Calls the parent function 'one'. It does not call the nested function 'two'.

if (true) {
    const username = 'deepak';
    if (username === 'deepak') {
        const website = 'youtube';
        console.log(username + website); // Outputs: deepakyoutube
    }

    // The following line will cause an error:
    // console.log(website);
    // Reason: 'website' is block-scoped due to const declaration
}

// The following line will cause an error:
// console.log(username);
// Reason: 'username' is block-scoped and not accessible outside the if-block

// ++++++++++++++++++++++ Hoisting Concept ++++++++++++++++++++

// Function declarations are hoisted, so this works
console.log(addone(5)); // Output: 6
function addone(num) {
    return num + 1;
}

// Function expressions are not hoisted, so this causes an error
// console.log(addtwo(5));
const addtwo = function (num) {
    return num + 2;
};

// Hoisting with variables
console.log(a); // Output: undefined (var declarations are hoisted but uninitialized)
var a = 10;

// The following line will cause an error:
// console.log(b);
// Reason: 'b' is declared using let, which is in the Temporal Dead Zone (TDZ)
let b = 50;

// The following line will cause an error:
// console.log(c);
// Reason: 'c' is declared using const, which is also in the Temporal Dead Zone (TDZ)
const c = 70;

/*
Temporal Dead Zone (TDZ):
- A specific region within a scope where variables exist but cannot be accessed 
  until they are assigned a value.
- Applies to variables declared using 'let' and 'const'.
*/

// Function declarations are hoisted, so this works
hii(); // Output: "hi how are u"
function hii() {
    console.log("hi how are u");
}

// Function expressions are not hoisted, so this causes an error:
// sayhii();
// Reason: The function is assigned to a variable using const, and const variables 
// are not initialized until their declaration line is executed.
const sayhii = function () {
    console.log("hi brother");
};

// The following line will also cause an error:
// sayhiii();
// Reason: Function expressions assigned to var are hoisted but initialized to undefined.
// Calling them before initialization causes an error.
var sayhiii = function () {
    console.log("this is var hii");
};
