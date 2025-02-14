
// console.log(a);
// var a = 10;

const { Currency } = require("lucide-react");

// let age = 10;
// if(age>18)
// {
//     console.log("you are an adult");
// }
// else
// {
//     console.log("you are a child");
// }

// object in javascript 

let vishal ={
    name : "vishal",
    age : 20,
    city : "india",
    phone:1234231,
    email:"vishal@gmail.com",
    address:{
        street : "1234",
        state :"bihar",
        district : "bojhpur",
    },
    currency:["rupee","dollar","euro"],
    printdetail: function(){
        console.log(this.name,this.age,this.city,this.phone,this.email,this.address.street,this.address.state,this.address.district,this.currency[0]);
    }
}
// vishal.printdetail();
// vishal.currency.push("pound");
// console.log(vishal.currency);

//it is mainly used for the object iteration 
for (let key in vishal){
    console.log(key,":",vishal[key]);
}


let arr = [ 1,2,4,4,5];

console.log(arr[2]);



let user = [
    {
        name : "vishal",
        age : 20,
        city : "india",
        phone:1234231,
        email:"vishal@gmail.com",
    },
    {
        name : "Deepak kumar singh",
        age : 22,
        city : "india",
        phone:1234231,
        email:"deepak@gmail.com",
    },
    {
        name : "Rajesh kumar",
        age : 23,
        city : "india",
        phone:1234231,
        email:"rajesh@gmail.com",
    },
    {
        name : "Riya kumari",
        age : 23,
        city : "india",
        phone:1234231,
        email:"riya@gmail.com",
    }
]

// console.log(user[2].name);

for (let key in user){
    console.log(key,":",user[key]);
}

// template literals 

let name = "vishal";
let age = 23;
console.log("my name is" , name,"and my age is ",age);
console.log(`my name is ${name} and age is ${age} and the sum of two number is ${1+2}`);


