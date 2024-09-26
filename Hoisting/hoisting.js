


function one() {
    const username = 'Histesh'

    console.log("parent only")
    //this function can access the parent class varibale 
    function two() {

        const website = 'youtube';
        console.log(username);
    }
    // console.log(website) this will give the error
    /*
    Becaue we can not acess the website out of the block beacuse the 
    the const have the block level scope
    */


}


// if we call the parent class so it only call the parent not the child  
one();


if (true) {
    const username = 'deepak';
    if (username === 'deepak') {
        const website = 'youtube';
        console.log(username + website)
    }

    //this will also give the error  
    //console.log(website)
}

//this will give the error because we can not access the const username outside the block of code
// beacause we inisilize inside the block
// console.log(username)



// ++++++++++++++++++++++ interesting ++++++++++++++++++++
console.log(addone(5));
function addone(num) {
    return num + 1;
}





console.log(addtwo(5));
const addtwo = function (num) {
    return num + 2;
}


//Hoistiong Concept

console.log(a); // output undefined
var a = 10;

console.log(b); // it give error we can not access the variable before the declaration
let b = 50;

console.log(c) // it give the error we can not acces the variable before the declareation 
const c = 70;

/*
the javascript treat the const and let diffrent way it put the variable in the tdz
Temporal Dead Zone (TDZ)

It is a specific region within a scope where variables exist but cannot be 
accessed until they are assigned a value.
*/


hii(); // it will not give the error
//function defination
//function declaration
function hii()
{
    console.log("hi how are u")
}


sayhii() //it will give the error
//function defination
//function expression 
const sayhii = function ()
{
    console.log("hi brother")
}



sayhiii()

//function defination
//fucntion expression
var sayhiii =function()
{
    console.log("this is var hii")
}




