//for Each loop in array

let city=["delhi","pune","Banglore","patna"]

// city.forEach(function printval(val)
// {
//     console.log(val);
// });

city.forEach((val)=>
{
       console.log(val.toLocaleUpperCase());
})


//practice questoion print the square of each element of the array using for each 
let xarr=[3,2,13,12,1,2];

xarr.forEach(function square(val){
    console.log(val*val);
})


/*
Map method : the map method is also return the value in the new array 
*/

let num =[1,2,12,42,13,44,231,12,19,24,111]

const newval =num.map(function x(val)
{
   return val*val;
})

console.log(newval)
console.log(num)


/*
filter array method : the filter array method always return the new array it doesn not change the existing array  
*/

let array = [3,23,12,56,21,26,42,12]
let filterarray = array.filter(function(val)
{
    return val>25;
})

console.log(filterarray); // it give the new array with the updated value


//Practice question 
let stumarks =[34,56,87,99,86,87]

const filtermarks = stumarks.filter(function (val)
{
       return val>87;
})

console.log(filtermarks);

let n = prompt("enter the value of n ");
let zz =[];
for(let i=1;i<=n;i++)
{
    zz[i-1]=i;
}
console.log(zz);

let sumxx = zz.reduce((sum,cur)=>{
    return sum+cur;
});

console.log(sumxx)







