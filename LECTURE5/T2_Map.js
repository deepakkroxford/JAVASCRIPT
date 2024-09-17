// let num = [1,2,3,4,5,6,7,8,9];
// let ans = num.map((x)=>{
//       return x+10;
// })

// console.log(num) // the original array never change 
// console.log(ans); // updated array

//chaning in the js

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarr = arr.map((val) => val * 10)
    .map((val) => val + 1).filter((val) => val > 50);

/* explanation
so here we are using the concept of the chaining 
In first (1) map method we multiply the number by 10 and then in the next map method we add the value 1 
and then we filter the output of sencond map method and return the value that  is greater than 50
*/

console.log(newarr)

