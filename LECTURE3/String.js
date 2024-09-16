let st1 = "Deepak Kumar Singh king";

console.log(st1.length);
console.log(st1[8])




let sentance = `this is template literal`;
console.log(typeof (sentance));


let obj = {
    item: "pen",
    Price: 10,
};
console.log("the cost of ", obj.item, "is", obj.Price);

let output = `the cost of ${obj.item} is ${obj.Price} rupees`;
console.log(output);


let add = `the additon of two numbers 55 and 56 is  ${55 + 56}`
console.log(add)

let abc = "Aman\n singh"
let newValue = abc.toLowerCase();
console.log(newValue);

console.log(abc);
console.log(abc.length)
let number = "123456"
console.log(number.slice(3))


//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
//Start username with @, followed by their full name and ending with the fullname length.

let full = prompt("enter he full name")
let user ="@"+full+full.length;
console.log(user);
