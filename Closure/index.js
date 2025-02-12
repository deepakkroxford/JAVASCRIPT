/*
What is a Closure? (In Simple Words)
A closure is a function that remembers the variables from its parent scope, even after the parent function has finished executing.

Breaking it Down Simply:
A function inside another function → The inner function has access to the outer function’s variables.
Even if the outer function is done executing → The inner function "remembers" those variables and can still use them.

*/



var sum = function (a) {
    console.log("live viwer", a)
    var c = 10;
    return function (b) {
        console.log("live viewer", b)
        console.log("live viewer", c)  // Accessing the outer function's variable 'c'
        return a + b + c;
    }
}
var store = sum(2);
console.log(store(5))


//second example of the closure given below


function closure(a,b,c){
    return {
        getsumTwo: function()
        {
            return a+b;
        },
        getsumThree: function()
        {
            return a+b+c;
        }
    }
}

var calculate =closure(5,6,7)
console.log(calculate.getsumTwo())
console.log(calculate.getsumThree())

/*
Why Is This a Closure?
Even though closure(5,6,7) has finished executing, 
its returned functions (getsumTwo and getsumThree) 
remember the values of a, b, and c due to closures.


Key Takeaways from Your Examples
✅ Closures store variables even after the outer function has executed.
✅ Closures help maintain state across function calls.
✅ Closures allow function-level encapsulation (like a private variable).
*/



/*
What is Lexical Scope?
Lexical scope means that a function can access variables 
from its parent scope where it was defined, not where 
it was called.


Example of Lexical Scope:
javascript
Copy
Edit
function outer() {
    let a = 10;
    
    function inner() {
        console.log(a); // 'inner' function can access 'a' from outer function
    }
    
    inner(); // Calling inner function
}

outer(); // Output: 10
Here, inner() has access to a because of lexical scope.

How Closures Use Lexical Scope
Closures "remember" the lexical scope even after the outer function has executed.

Example: Closure + Lexical Scope
javascript
Copy
Edit
function outer() {
    let a = 10;
    
    return function inner() {
        console.log(a); // Still remembers 'a' even after 'outer' has finished
    };
}

const closureFn = outer(); // 'outer' runs and returns 'inner'
closureFn(); // Output: 10
🔹 Even though outer() has finished executing, inner() still has access to a because of closure + lexical scope.
*/


/*

Summary:
✅ Lexical Scope → Functions access variables from their parent function.
✅ Closure → Functions remember variables from their parent function, even after the parent has executed.

🚀 So, closures rely on lexical scope to work!

Let me know if you want more examples! 🎯
*/