/*
function expression ()
*/



// function expression
expression(); // we can hoist the function expression but not the function declaration
function expression ()
{
    console.log("I am a function expression");
}



// declaration of function

// add() it will give the error because we can not hoist the function declaration 
const add = (a,b)=>{
console.log("I am a function declaration")
}
add();