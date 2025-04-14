
/*
what is higherOrder function ? can you give the example of this ?

sol:- The higher order function are those functions that take an argument a function or return an function .
the best example of the higher order function is map method. let see the example below
*/


let arr=[2,3,4,5,67,7,7];

let res=arr.map(function(nums){
    return nums*2;
})
console.log(res);

/*
what is iife (immediate invoke function expression) ? can you give the example of this ?

sol: An immediate invoke function expression is a javascript function that is defined and executed
immediately after it is created. lets see the example below
*/

// normal function 
function greet(){
    console.log("hello how are you?");
}

//iife function expression

(function(){
    console.log("hello how are you from iife?");
})();


// call apply and bind
// so the main function of the call is change the refrece of this keyword to the other object
function getData()
{
    console.log(this.name,this.age,this.profession);

}

let person={
    name:"deepak",
    age:22,
    profession:"software engineer"
}

getData.call(person);

var a=19
function deepak()
{
   var a =10;
}

console.log(a); // it will give 19 not 10.


console.log(+true); // it will give 1
console.log(+false); // it will give 0




