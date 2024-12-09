//question1

// let a =[];
// let b =[];
// console.log(a==b) 
// console.log(a===b)

//the reason is the memory address of the array is diffrent so it will give the false


//question 2;

// let c=[];
// let d=c;
// console.log(c==d)  //true
// console.log(c===d) //true
// the reason is the memory address is sam for the both variable 


//question 3;

// let a=[20];
// let b=[20];
// console.log(a==b) 
// console.log(a===b)

//the answer is false for both beacuse the address is diffrence

//question 4;


// let a=[20];
// let b=[20];
// console.log(a[0]==b[0]) 
// console.log(a[0]===b[0])

//true for both beacuse the the data and type is both same

//Question 5

// let z =[1,2,3,4]
// let a ={name:'aman'} 
// console.warn(...z) //destructing if the object is array it element comes out 

//output will be 1 2 3 4 in string form


//Question 6
// console.log(typeof NaN) // Not A Number
// // type of NaN --> Number
// //so how Nan will apper 

// let s= "aman"/2;
// console.log(s) //not a number


//Question 7

// let data = 10 - -10;
// console.warn(data); // - - => + so answer is 20

//Question 8

const set = new Set([1, 1, 2, 3, 4]);
console.log(set)

//question 9

// let data ={
//     names:'Anil'
// };
// console.warn(delete data.names) //true 

//so the delete method return true or false if the data is present 
//so it delete and return true if not present it return false


//question 10

// const data = {
//     name:'deepak'
// }
// console.warn(delete data)
// //we can not detete the data we can only delete the property inside the data 
// console.warn(data) // remain same

const data = ["Peter", "Deepak", "vishal"]
const [y] = data;
console.log(y); // it give the first peter


/*
Question: Can you give the example of the foreach and map methods. and tell the diffrences
*/


// forEach example
let arr = [1, 2, 3, 4, 5, 56, 7];

//foreach does not return anything it modifies the same array.
const ans = arr.forEach((value, index) => {
    arr[index] = value * 2; // Modify each element by multiplying it by 2
});

console.log(ans); // it give undefiend because it not return anything 

//map example

//map return the new modified array when we perform the operation on it 
let mapans = arr.map((value) => {
    return value * 2; // Create a new array with each element multiplied by 2
})
console.log(mapans)

//How this code is used this keyword in the javascript 
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    job: {
        jobrole: 'forntend developer',
        experience: 2,
        company: 'XYZ Corp'
    },

    printdetail: function () {
        console.log(`my name is ${this.name} and age is ${this.age} and city is ${this.city} and jobrole is ${this.job.jobrole} and experience is ${this.job.experience}`);
    }
}
person.printdetail();


//create a new input box if the age is less than 18 we have to show the 


let a= 50;

if(true){
    let a = 10;
    console.log(a);  // 10
}
console.log(a);  // 50