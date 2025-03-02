// what is function declaration vs function expression 

// function declaration:-
function additional(a,b)
{
    return a+b;
}
let ans = additional(34,56);
console.log(ans);


// this is the function expression 
let calculations =  function(a,b)
{
    return a*b;
}
console.log(calculations(3,4));


// what are prmitive datatypes and what is the difference between the primitive and non-primitive datatypes/

/*
Primitive datatypes: 
so primitive datatypes are those data types that store the single value not and object or refrence
it mostly take the fixed size in the memory . it store in the stack memory 
In js the prmitive datatypes are:
1. Number
2. String
3. Boolean
4. Null
5. undefined
6. Symbol
7. Big Int

Non-primitive datatypes:
Non-primitive data types are complex types that can store multiple values and do not have a fixed size in memory.
They are stored in heap memory and accessed by reference (not directly).
Unlike primitives, they can hold multiple pieces of data.
Example: An array can store multiple numbers or strings.

Their memory usage grows dynamically based on the data stored.

Non-Primitive Type	Example
Object	let person = { name: "Deepak", age: 22 };
Array	let numbers = [1, 2, 3, 4, 5];
Function	function greet() { console.log("Hello!"); }
Date	let today = new Date();

*/


// what is splice method in array ?

/*
so splice method is the method that we use in the array to perform the operation like
1. Add an element
2. Remove an element
3. Replace an element

Syntax: array.splice (start, deletecount, item1, item2...)
*/

let arr= [1,2,3,4,5,6,67];
let res = arr.splice(2,1); // it meas we are starting from index 2 and remove the 1 element 
console.log(arr); // this is the updated array

arr.splice(2,0,512,33); // it means we are adding in the array and adding in the array from index 2
console.log(arr); // this is the updated array

arr.splice(1,0,78); // it means we are replacing with new value 78 at index 1
console.log(arr); // this is the updated array

console.log(arr.indexOf(67)); //this will give the index of the element if not there -1 
console.log(arr.includes("aman")); // this will return the true or false
arr.unshift("aman kumar singh");
console.log(arr); // this will add the element at the start of the array
arr.shift();
console.log(arr); // this will remove the element from the start of the array



function addtion()
{
    console.log("ans");
    return 100+300;
}


function sub()
{
    console.log("sub");
    return 300-200;
}

//let a  =(addtion(),sub()); // first 400 will come then 100 will replace the previous value 400 and the value of a =100;
console.log(a);



// Browser Object Model in JavaScript
// The Browser Object Model (BOM) in JavaScript helps to interact with the browser, not just the webpage.
//  While the DOM handles the content of the page, BOM gives you control over things like the browser window, the URL,
// and the history. This means you can do things like resize the window, go back and forth in the browser 
// history, or even find out what browser the user is using. In short, BOM helps JavaScript work with the 
// browser to make web pages more interactive.

// Browser Object Model Types
// Here are the main parts of the Browser Object Model (BOM)

// Object	Description
// window	Represents the browser window, controlling aspects like size and location, and serves as the global object.
// navigator	Provides details about the user's browser and operating system.
// location	Manages the current URL, allowing for retrieval and modification of the web address.
// screen	Offers information about the user's screen, such as its width and height.
// history	Provides access to the browser's session history, enabling navigation through the user's browsing history.


let numvalue =2;
let x= !--numvalue; // 1 = true , !1 = false
let y= !--numvalue; // 0= false ,!0= true
console.log(x,y); 


console.log(+"555"); // converted string to the number 555 
console.log(+555);  // it will reamin the number and output is 555

function test (record)
{
    if(record=={age:28})
    {
        console.log("ypu are an adult")
    }
//    else if(record==={age:38}){
//         console.log("ypu are still an adult")
//     }
    else{
        console.log("you are not an adult")
    }
}

test({age:28}); // it will print the you are not an adult because the object is not same
test({age:38}); // it will print the you are not an adult because the object is not same
test({age:38}); // it will print the you are not an adult because the object is not same

console.log(+true) // it will convert into 1
console.log(+false) // it will produce 0;


var a ={};
var b = {key:'b'}
var c = {key:'c'}
a[b]=600;
b[c]=700;
b[b]=400;

console.log(a[c]);// 600
console.log(a[b]);//600
console.log(b[b]);//700
console.log(b[b])//400
console.log(b[c]);//700



console.log(name); // so the name variable is already available in the browser environment we do console.log before insilization it will give the empty string
var name = 'Deepak'



// shadowing 

var xy = 20;
function foo()
{
    console.log(x); // undefined is answer 
    var xy = 10;
}
foo()


function bar()
{
    console.log("what we get",x);  // give error beacuse when we decalre variable without let and const and var it will not present in the global and loacl scope 
    x=10;  // when we run the code and at this time it createated in the global scope now we can access it 
    console.log(x); // 10;
}
bar();


// aman(); 
// var aman =20; // beacuse of this line we get an error ,if this line is not there so our answe is two time console.log
// function aman()
// {
//     console.log("aman is printing");
// }
// aman();


// What is promises and take one example to explain ?
/*
Promises in JavaScript are used to handle asynchronous operations by keeping track of whether the operation has been completed or not.
promises are the object in the javascript. it takes a callback function with the two parameters ,the first one is resolved and the
second one is rejected.
lets takes an example to understand how it works;
*/

let abc = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let x = true;
        if(x)
        {
            console.log("the promises is resolved ")
            resolve("the promises is resolved")
        }
        else{
            reject("the promises is rejected");
        }
    },3000)
})


abc.then(function(res){
    console.log("the promises is resolved");
}).catch(function(err){
    console.log(err);
})
    
// it will give the output the promise is resolved after 3 seconds.


function add(a,a,b)
{
    return a+a+b;
}

console.log("the sum of add is ",add(2,3,4)); // it will give the output 10 a overwrite the first value of a =2 to a=3 so 3+3+5 =10