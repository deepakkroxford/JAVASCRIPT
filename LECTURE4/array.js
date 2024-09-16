
let marks =[97,98,99,100,34,32];
console.log(marks)

marks[0] =100;
for(let i=0;i<marks.length;i++)
{
  console.log(marks[i])
}

console.log("printing using the for of loop")
for(let mark of marks)
{
    console.log(mark);
}

console.log("printing using the for in loop")
for(let mark in marks)
{
    //console.log(mark)//it will print the indices
    console.log(marks[mark]) //it will print the value
}


let names =['deepak','amam','boss','king','vishal'];
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}


/*
Q1 we have to find the avg of the number array 
*/
let number = [85,97,44,37,76,60];
let sum=0;
for(let i=0;i<number.length;i++)
{
    sum+=number[i];
}
let avg = sum/number.length;
console.log("the average of the number is ",avg);

/*
Q2 For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.
*/

let item = [250,645,300,900,50];
for(let i =0;i<item.length;i++)
{
    console.log(`value of indeces ${i} = ${item[i]}`)
    let offer = item[i]/10;
    item[i]=item[i]-offer;
    console.log(`value after offer = ${item[i]}`);

}
console.log(item);

/*
Methods in the Array
*/
let food =["tomamto","potato","ladyfingre"];
console.log(food);
food.push("chips","kareal");
console.log(food);
food.pop();
console.log(food)

let x =[34,53,76,34,12,545];
//if want to convert into string we can use the toString method 
console.log(marks)
console.log(typeof(marks))
x.toString();
console.log(typeof(marks));


//concat method
let marvel=["spiderman","thor","ironman"]
let dchero=["superman","batman"]

// let hero = marvel.concat(dchero);
// console.log(hero);

marvel.unshift("antmam")
console.log(marvel)
marvel.shift();
console.log(marvel)

let arr=[1,2,3,4,5,6,7]
arr.push(3,4,2,2221);

/*
the splice method take the three value first is indece ,delete ,and then replace
*/
// arr.splice(2,3,101,102)
console.log(arr)

//add element
// arr.splice(3,0,800);
// console.log(arr)

//delete element
// arr.splice(3,1);
// console.log(arr);

//replace 
arr.splice(2,1,1029) //it replacee the 2nd index value to 1029
console.log(arr)
console.log(arr)

