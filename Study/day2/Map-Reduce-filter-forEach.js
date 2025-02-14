/*
 forEach :- it is used to iterate over the array and print the value of the array.
*/

let arr = [1,2,4,5,6,7,8,9,10];


// first value give you the current value of the array.
// second value give you the index of the array.
// third value give you the array itself.
let x=arr.forEach((currentvalue , index , array)=>{
    console.log(currentvalue, index, array);
})
//console.log(x); // undefined

// arr.forEach(function(x){
//     console.log(x*x);
// })

/*
map :- it is used to create a new array by applying a function to each element of the original array.
*/

let arr1 = [1,2,3,4,5,6,7,8,9,10];

let x1=arr1.map((current)=>{
    return current*current; 
})
console.log(x1);
console.log(arr1);

/*
filter :- it is used to filter the array based on the condition.
*/

let arr2 = [1,2,3,4,5,6,7,8,9,10];

let x2=arr2.filter((current)=>{
    return current%2==0;
})
console.log(x2);

// we can also use the for loop to filter the array base of the
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        console.log(arr2[i]);
    }
}

/*
reduce method: the reduce method is used to reduce the array to a single value.It return a single value.
*/


let arr3 = [1,2,3,4,5,6,7,8,9,10];

let x3=arr3.reduce((acc,curr)=>{
    console.log(acc,curr);
    return acc+curr;
},0)
console.log("the sum of the array is ",x3);


/*
acc=0,curr=1;
return = 1;

acc=1,curr=2;
return = 3;

acc=3,curr=3;
return = 6;

*/




/*
diffrence between return and console.log
*/
function add(a,b)
{
    console.log("the sum of two number is ",a+b);
}
add(1,2);

function returnadd(a,b)
{
    return a+b;
}
let sum =returnadd(5,6);
console.log(sum);





console.log(a);
let a=10;

