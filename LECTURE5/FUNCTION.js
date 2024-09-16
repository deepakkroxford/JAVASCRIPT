/*
I am going to create the function 
*/
function myfunction()
{
    console.log("Hi this is my first function");
    console.log("My name is deepak kumar singh");
}

// console.log(myfunction());
myfunction();


//adding two number
function  addnumber(a,  b) // in the function their is no need to identify the let const var
{
    let c = a+b;
    return c;
}

console.log("the sum of two number is ",addnumber(34,56));
console.log("the adding two string", addnumber("sita", "gita"));



function multiply(a,b)
{
    if(typeof a=="number" && typeof b=="number")
    {
        console.log(a*b);
    }
    else{
        console.log("plz enter the valid input in the paramet")
    }
  
}

multiply(); // NaN  so--> Not a Number 

multiply(4,null);
multiply(6,8);

//using string literals in function 

function stringLiterals(username,address)
{
    if(username ===undefined || address ===undefined)
    {
        console.log("enter the user name or address")
        return;
    }
    return `the username is ${username} and address is ${address}` // string literals 

}


console.log(stringLiterals("@deepakKumar","Bihar"))
console.log(stringLiterals());


/* 
passing object in to the function 
*/
let penobj = {
    type:"cello",
    color:"blue",
    price:100
};

function passingObject(myobject)
{
    return `the type of the pen is ${myobject.type} and the color of pen is
     ${myobject.color} and price is ${myobject.price}`;
}

console.log(passingObject(penobj));


//Directly passing the object into the function without creating the object 

console.log(
    passingObject({
    type:"Link",
    color:"Red",
    price:100,
}));

/*
passing array into function 
*/

const myarray =[100,234,6,543,232]

function arrayfunction(getArray)
{
    //return getArray; // so it will return the whole array
    return getArray[3]; // it will return the specific index value  

}

console.log(arrayfunction(myarray))


//directly passing the array into the function without creating the array

console.log(
    arrayfunction(
        [49,56,234,23,2,12]
    )
);