let arr = [1, 2, 3];


//using the normal function
let toatalsum = arr.reduce(function (acc, curval) {
    console.log(`acc ${acc} and curvalue ${curval} `)
    return acc + curval;
}, 0)

console.log(toatalsum)

//using the arrow function

let toatalsum1 = arr.reduce((acc, val) => {
    return acc + val;
}, 3)

console.log(toatalsum1)


const shoppingcart = [
    {
        item: "js course",
        price: 299,
    },
    {
        item: "mobile dev",
        price: 299,
    },
    {
        item: "artificial intelligence",
        price: 499,
    },
    {
        item: "cloud computing",
        price: 599,
    },
    {
        item: "data science",
        price: 699,
    },
]

//we have to add the price using the reduce

const finalprice = shoppingcart.reduce((curr,val)=>
{
    return curr+val.price;
},0)

console.log("the total pice of the course is ",finalprice);

//factorial of the number using the reduce function

let factorialarray = [1,2,3,4,5];

let factorial= factorialarray.reduce((curr,val)=>
{
   return curr*val;
},1)

console.log(factorial)