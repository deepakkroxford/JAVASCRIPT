/*
Basic Console Uses 10 questions
*/

const { XCircle } = require("lucide-react");

// Q1
console.log("My name is deepak kumar singh","i am 22 year old");
// Q2
console.log(45*2-10);
//Q3 use console log to display the current year date 
const curretDateAndYear = new Date();
console.log("current time",curretDateAndYear.getTime(),"current year",curretDateAndYear.getFullYear(),"currntDate",curretDateAndYear.getDate(),"currenMonth",curretDateAndYear.getMonth());
//Q4 create a two variable for the first and the last name 
let firstname = "Deepak Kumar ";
let lastname = "Singh";
console.log(firstname+lastname)
console.log(firstname.concat(lastname))
//Q5 Track the value of the variable by logging it 
let a = 10;
console.log(a);
a = 223;
console.log(a);
//Q6 use console error to simulatet the error
console.error("this is the error ")
//Q7 Log the square of the number 12
console.log(12**2);
//Q8 Print the type of the variable holding the value true
var x =true;
console.log(typeof(x));
var x = "deepak";
console.log(typeof(x));
var x = 32+"sdcs";
console.log(typeof(x));
var x = NaN; // it will give the number 
console.log(typeof(x));
var x = undefined; //undefined
console.log(typeof(x));
var x  = 2331.12; // number
console.log(typeof(x));
//Q9 create the variable holding your age and log whether greater than 18
var age = 18;
if(age>18) console.log("age is greater than 18")
else console.log("not greater than 18")
//Q10 log the 100/0 and tell what is the output
console.log(100/0) // Infinity


/*
    Variable and Datatypes
*/

//Q11 Declare the varibale with let and log is value
let d = 12;
console.log(d);
//Q12 Create a const and declare the value PI and log it
const pi = Math.PI;
console.log(pi,typeof(pi));
//Q13 Reassign the value to a variable declare with let and log the result
let b = 23;
b=556;
console.log(b);
// Q14 check the type of the null and log it 
var x = null; // object
console.log(typeof(x));
// Q15 Create a variable with number as a string (e.g "25") and log its type
var x = "aman"; console.log(typeof x);
//Q16 use typeof to check the value is boolean or not
var x = true; console.log(typeof x);
//Q17 create type of type string , number , boolean and log there values

var c = 234;
var e = "aman";
var x = true;
console.log(c,e,x)

//Q18 declare the variable without assiging the value and log its type
let aa ;
console.log(typeof aa);
// Q19 declare the varible with undefined and log its type
let aaa = undefined; console.log(typeof aaa);
// Q20  use const to create and array , try reassign the arrya and check the error
const zx =[1,2,34,5];
// x=[]; // we can not reassing the const but we can manupulate
console.log(zx.pop());
console.log(zx);
/* Ressing of value is not allowe but updating is allowed */


/*
 Loops 10 questions
*/

//Q21 write a for loop to print the number from 1 to 50 
for(let i=1;i<=50;i++)
{
    console.log(i);
}
//Q22 use while loop to sum the number from 1 to 10 ;
let sum =0 
let i=0;
while(i<=10)
{
    sum +=i;
    i++;
}
console.log(sum);
//Q23 create a for...of loop to log each charter of the string "JavaScript".
let str = "javascript";
for(let fox of str)
{
    console.log(fox);
}
// Q24 Write a for loop that skips even number between 1 and 20 

for(let i=0;i<21;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}
// Q25 write a do while loop to log number 5 to 1;
let num =5;
 do{
    console.log(num);
    num--;
 }
 while(num>0);

 //Q26 create a for loop that calculate the factorial of 5
 const facatorial = 5;
let product = 1; 
for(let i=5;i>=1;i--)
{
    product *= i;
}
console.log("the factorial  of the number is ",product);

//Q27 write the nested loop to print a 3*3 grid number
let count = 1;
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += count++ + " ";
    }
    console.log(row.trim());
}

//Q28  use a for loop to reverse the array 
let arr=[1,2,3,4,5,6,7,8];
let rev =arr.length-1;
for(let i=0;i<arr.length/2;i++)
{
    let temp = arr[i];
    arr[i]=arr[rev];
    arr[rev]=temp;
    rev--;
}
console.log(arr);

//Q29 write a while loop that logs the number divisible by 5 1 to 100;
let number=1;
while(number<=100){
    if(number%5==0)
    {
        console.log(number);
    }
    number++;
}

//Q30 use the for in loop to itterat over the object and log its keys

let obj ={
    name:"deepak",
    age:23,
    roll:"1OX21IS033",
    CGPA:9.12
}
for(let key in obj){
    console.log(key);
}




