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
function areaoftraingle(b,h)
{
    if(typeof b==='number' && typeof h ==='number')
    {
        let area = b*h/2;
        return area;
    }
    else{
        console.log("plz enter the valid input")
    }  
}

console.log(areaoftraingle('abc','bgc'))
console.log(areaoftraingle(16,12))

/*
find the Perimeter of the Regular Traingle 
*/

function PerimeterRegularTraingle(a,b,c)
{
    let x = (a+b+c)/2;
    return x;
}
console.log(PerimeterRegularTraingle(2,4,6));


/*
Q5 Swap two number
*/

const swap =(a,b)=>{
    console.log("before swapping the number",a,b);
    let temp = a;
    a=b;
    b=temp;
    console.log("after swapping the number is ",a,b);
}
swap(5,6);


/*
Q6 Converting Kilometer to Miles
*/

const miless = (kilo)=>{
   let  miles = kilo * 0.621371;
   return miles
}
console.log(miless(23));

/*
Q7 Convert Celcisus Fahrenheit using Html
*/

function Convert()
{
   let c = document.getElementById('data').value;
   let f = (c*1.8)+32
   document.getElementById('res').innerText=`${c} C is = ${f} F`


}

document.getElementById('btn1').addEventListener('click',function(e)
{
    return Convert();
})
