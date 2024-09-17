//Q1 print print hello world using js
// console.log("Hello word")

//Q2Add two number using Js

// function addnumber(a,b)
// {
//     let res = parseInt(a)+ parseInt(b);
//     console.log("the sum of two number is",res);
// }
// addnumber(10,20);
// let num1 = prompt("ennter the number 1")
// let num2 = prompt("enter the number 2")
// addnumber(num1,num2); 

//when we pass input it treat as the string 
//if we pass 5 and 9 it will give - 59 but it wrong in the contex of sum

//Q3 Square root of the number 
// var a = prompt("enter the number a")
// console.log(Math.sqrt(a));
// if we give the negative number then it return the value NaN ->Not a number
// if we pass string then it give the output Not a Number


/*
Q4 find the area of the right angle triangle
*/
function areaoftraingle(b, h) {
    if (typeof b === 'number' && typeof h === 'number') {
        let area = b * h / 2;
        return area;
    }
    else {
        console.log("plz enter the valid input")
    }
}

console.log(areaoftraingle('abc', 'bgc'))
console.log(areaoftraingle(16, 12))

/*
find the Perimeter of the Regular Traingle 
*/

function PerimeterRegularTraingle(a, b, c) {
    let x = (a + b + c) / 2;
    return x;
}
console.log(PerimeterRegularTraingle(2, 4, 6));


/*
Q5 Swap two number
*/

const swap = (a, b) => {
    console.log("before swapping the number", a, b);
    let temp = a;
    a = b;
    b = temp;
    console.log("after swapping the number is ", a, b);
}
swap(5, 6);


/*
Q6 Converting Kilometer to Miles
*/

const miless = (kilo) => {
    let miles = kilo * 0.621371;
    return miles
}
console.log(miless(23));

/*
Q7 Convert Celcisus Fahrenheit using Html
*/

// function Convert()
// {
//    let c = document.getElementById('data').value;
//    let f = (c*1.8)+32
//    document.getElementById('res').innerText=`${c} C is = ${f} F`


// }

// document.getElementById('btn1').addEventListener('click',function(e)
// {
//     return Convert();
// })


//Q10 Generate the Random Number 

let x = Math.random();
console.log('the random number before setting the range', x);
x = x * (10 - 1) + 1;
console.log("the range of number between 1 to 10", x)
console.log("the math.floor function remove the decimal point", Math.floor(x));



//formula to find the random number 
//let a = Math.random()*(10-1)+1;


//Q11 to check the number is odd or even 

let num = 12;

if (num % 2 == 0) {
    console.log(`the number ${num} is even number`);
}
else {
    console.log(`the number ${num} is odd number`)
}

function checkingEvenOdd(num) {
    return num % 2 == 0 ? "it is even" : "no";
}
console.log(checkingEvenOdd(num))



//Q12 checking the number isprime or not
let isprime = 31;
let count = 0;
if (isprime == 0 || isprime == 1) {
    console.log("not a prime number")
}
else {
    for (let i = 1; i <= isprime; i++) {
        if (isprime % i == 0) {
            count++;
        }
    }
}

if (count === 2) {
    console.log(`the number is ${isprime} prime number`);
}
else {
    console.log(`the number is ${isprime} not a prime`)
}

//Q13 Finding the largest number among the 3 number;

var a = 12;
var b = 17;
var c = 89;

//using the arrow function 
const findmax = (a, b, c) => {
    if (a > b && a > c) {
        console.log(`the number a ${a} is greater`)
    }
    else if (b > a && b > c) {
        console.log(` the number b ${b} is greater`)
    }
    else {
        console.log(`the number c ${c} is greater`)
    }
}

findmax(a, b, c);

//we can also find using the math.max method
var final = Math.max(a, b, c);
console.log(final)

//Q14 finding the factorial of the number 
// var numbertofind = 5;
// var product = 1;

// if (numbertofind === 0) {
//     console.log(`the factorial of number ${numbertofind} is 1`)
// }
// else if (numbertofind < 0) {
//     console.log("not possible to find the factorial of the negative number")
// }
// else {
//     for (let i = 1; i <= numbertofind; i++) {
//         product *= i;
//     }
// }
// console.log(product)

//using recursion 

var number =5;
var product=1;
function fact(n)
{
 if(n>number)
 {
    return;
 }
  var tmp = product;
   product = product*n;
   console.log(tmp +" x " +n+ " = " +product)
   n++;
   fact(n);
}

fact(1);



