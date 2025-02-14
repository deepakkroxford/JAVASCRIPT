
/*
If we create the object in this way we have to write the same code many time 
we can use the prototype insteed of this to inherit the property of the obeject
*/
// let student = {
//     name: 'Deepak Kumar Singh',
//     branch: 'ISE',
//     birth:2004,
//     getfullName: function () {
//         return this.name + " " + this.branch;
//     },
//     getAge : function()
//     {
//         let age  = new Date().getFullYear()-this.birth;
//         return age;
//     }
// }
// let teacher = {
//     name: 'Aman Singh',
//     branch: 'CSE',
//     birth:2002,
//     getfullName: function () {
//         return this.name + " " + this.branch;
//     },

  
// }
// console.log(student.getAge())
// console.log(teacher.getAge())


let user= {
    getfullName: function () {
        return this.name + " " + this.branch;
    },
    getAge : function()
    {
        let age  = new Date().getFullYear()-this.birth;
        return age;
    }
}

let student = {
    name: 'Deepak Kumar Singh',
    branch: 'ISE',
    birth:2004,
   
}
let teacher = {
    name: 'Aman Singh',
    branch: 'CSE',
    birth:2002, 
}

student.__proto__ = user;
teacher.__proto__ = user;


console.log(student.getAge())
console.log(teacher.getAge())


//so if we want to add our own prototype in our whole project so we can add like this 
//create our own property
Object.prototype.amansingh="this is my own property"

Object.prototype.king = function()
{
    return "this is my own function"
}

String.prototype.customLength = function()
{
    return this.length+2;
}



/*
Date - 14-02-2025

*/

const car1 ={
    name :"Bmw",
    price :100000,
    color :"blue",
    year :2020,
    getDetails: function(){
        return `This car is ${this.name} and it is ${this.color} and it is ${this.year} year old and its price is ${this.price}`
    }
}

const car2 ={
    name :"Audi",
    price :200000,
    color :"red",
    year :2021,
    __proto__ : car1  // it means that we inherit the getdetails function from the car1 and no need to define again in the car2 so it is a good example of use of the prtotype
}


console.log(car2.getDetails())