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
