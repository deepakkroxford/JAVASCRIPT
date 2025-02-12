/*
call, apply, and bind are methods used to explicitly
set the value of this when calling a function. 
They are mostly used in function borrowing and 
manipulating the this context.
*/


let userDetails1 = {
        name :'Deepak Kumar Sing',
        Age :22,
        city :'Pune',
        Designation:"software engineering",
        printdetails: function(){
            console.log(`Name: ${this.name}, Age: ${this.Age}, City: ${this.city}, Designation: ${this.Designation}`);
        }
}

userDetails1.printdetails();


let userDetails2 = {
    name :'Aman Kumar Singh',
    Age :23,
    city :'Banglore',
    Designation:"software engineering",
}


// using the call method we can access the other object variable.
 userDetails1.printdetails.call(userDetails2);


//IF FUNCTION OUTSIDE THE OBJECT SO WE CAN ACCESS LIKE THIS

let Alldetails = function(state, country){
    console.log(this.name+" "+state," "+" "+country);
}

console.log("leaing call method ")
Alldetails.call(userDetails2);


//use of apply 

/* so when we have to pass some value so we can use the
apply method and pass the value .
we can also pass the value in the call 
like this Alldetails.call(userDetails2,"delhi","India");
but we can only pass as single value 
but in a apply we can pass as a list of array 
*/



console.log("learing the apply method and passing the value in array list")


Alldetails.apply(userDetails2,["delhi","india"]);


//learning the bind function 
// in bind we can store the value of the function and use them later
let newfun = Alldetails.bind(userDetails2,"delhi","india");
console.log(newfun());
