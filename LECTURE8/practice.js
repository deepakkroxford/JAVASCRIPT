console.log(5!=='5')
console.log('5'+5);

let a= 5+'5';
console.log(a);
a+='5'
console.log(a);
a*=5;
console.log(a);
console.log(typeof a);


function add(a,b)
{
    console.log(arguments);
    return a+b;
}

let x=add(23,44);
console.log(x);


 const sub=(a,b)=>{
    console.log(arguments);  // arguments object can't be used in arrow function
 
   return a-b;
}

let y=sub(100,50);
console.log(y);


let arr = [1,2,3,4,5,6,7,8,9,100];

let ans =arr.forEach((value,index) => {
    console.log("element ->",value,"index -> ",index);
   
});
console.log(ans);