
/*
If we create the object in this way we have to write the same code many time 
we can use the prototype insteed of this to inherit the propprtty of the obeject
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


//so if we want to add our own prototype in our hole project so we can add like this 
//create our own property
Object.prototype.amansing="this is my own property"

Object.prototype.king = function()
{
    return "this is my own function"
}

String.prototype.customLength = function()
{
    return this.length+2;
}
