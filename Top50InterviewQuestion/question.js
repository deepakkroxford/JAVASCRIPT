/*
Basic Console Uses 10 questions
*/

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


/*
Array 10 questions
*/

//Q31 create an array of your top 5 faviourites movie

var array= ["Spartan300","Kantara","Sonic","Lucy","Mission Imposible"];
for(let i=0; i<array.length;i++)
{
    console.log("my "+(i+1)+" favorite movie is "+array[i]);
}
//Q32 find and log the second element of the array
console.log("second element of the array is ",array[1]);
//Q33 add a new movie to the start of the array using unshift function
array.unshift("Gladiator");
array.unshift("Super30");
console.log("updated array is ",array);
//Q34 Remove the last element of the array and log the updated array
array.pop();
array.pop();
console.log("updated array is ",array);
//Q35 use slice() to extract the first three elements of the array 
console.log(array.slice(0,3)); // in this 0,1,2 index element is returned it does not take the 3 index elements 
//Q36 find the index of the specified element in an array using the indexof()
console.log(array.indexOf("Kantara")); // it will return the index of the first occurrence of the element
//Q37 check the value exists in an array using .include()
console.log(array.includes("kings")); // it will return true if value exists other wise false 
//Q38 combine two array [1,2] and [3,4] using concat
let arr1=[1,2,3,4,"deepak kumar sing", ,];
console.log(arr1.length)// output will be 6 
let arr2 = [5,6,7,8,9,"aman singh"];
console.log(arr1.concat(arr2));
//39 sort an array in acending order [5,4,3,2,1];

let arr3=[5,6,1,21,3,7,6,9];

for(let i=0;i<arr3.length;i++)
{
    for(let j=0;j<arr3.length-i-1;j++)
    {
        if(arr3[j]>arr3[j+1])
        {
            let temp = arr3[j];
            arr3[j]=arr3[j+1];
            arr3[j+1]=temp;
        }
    }
}
console.log(arr3);

//40 write a program that create a copy of the array without mutating the original
let arr4=[1,2,3,4,5,6,7,8];
let copyArray = [...arr4];
console.log(copyArray);

/*
function 10 questions
*/
//41 write a function to check the number is odd or even 

function oddEven(num)
{
    if(num%2==0)
    {
        return "even";
    }
    else
    {
        return "odd";
    }
}
console.log(oddEven(45));

//Q42 Create a function to calculate the area of a circle with a given radius 

let areaOfCirlce=(radius)=>{
  
    return `The given radius is ${radius} and area of circle is ${Math.PI*radius*radius}`;
}

console.log(areaOfCirlce(5));

//Q43 write a function that accept an array and return the sum of it

const sumOfGivenArray= (arr)=>{
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return `the sum of given array is ${sum}`;
}

let sumarray =[1,234,2321,11,1,2,42,13,3];
console.log(sumOfGivenArray(sumarray));

//Q44 write a function to check the string start with specific character or not

function startsWithChar(str,char)
{      str=str.toLowerCase()
    return str.charAt(0) === char;
}
console.log(startsWithChar("Hello","h"));

//Q45 wrte a function to find the maximum of two number

function maxiumum(a,b)
{
    if(a>b)
    {
        return `a is greater than b`
    }
    else{
        return `b is greater than a`
    }

}

console.log(maxiumum(4,56))

// Q46 Create a function that takes a number and return its factorial 
function factorial(num)
{
    if(num==1)
    {
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}
console.log(factorial(5));

//Q47 create a function that takes a string and return the reverse of the string

function reverseString(str)
{
    let reversed = "";
    for(let i=str.length-1;i>=0;i--)
    {
        reversed += str[i];
    }
    return `the reverse of the given string ${str} is ${reversed}`;

    /*
    return str.split("").reverse().join("");
    */
}
console.log(reverseString("Deepak Kumar singh"));

//Q48 create a function to find the maximum number in the array
function findMax(arr)
{
    let max = arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([43,231,21,22,4,2,1,4,22]));

//Q49 write a function that convert the string to kebab-case 

function kebab(str)
{
    return str.replaceAll(" ","-");
    // return str.split("").join("-");
}
console.log(kebab("Deepak Kumar Singh"));

//Q50 crate a function that print hello world 
function printHelloWorld()
{
    console.log("Hello World");
}
printHelloWorld();
