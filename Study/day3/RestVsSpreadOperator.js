

function addNumber(a,b,c,...others)
{
    console.log("other values",others)
    console.log("what is the value of a ,b c",a,b,c)
    return others;
}

console.log("the sum of number is :- ",addNumber(1,2,3,67,21,12,12,45,78,12)); 


let arr1 =[1,2,3];
let arr2=[4,5,6];

const merged = [...arr1,...arr2];
console.log("merged array is :- ",merged);