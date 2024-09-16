
//for loop
for (let a = 1; a <= 10; a++) {
    console.log("how are you ")
}

//while loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

//do while loop
let b = 0;
do {
    console.log("my name is deepak kumar singh");
    b++;
} while (b <= 10);


//for of loop it mainly used for itterate the speacial data type like string and array
let str = "Deepak Kumar Singh";

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
for (let i of str) {
    console.log(i);
}


// for in loop that we used for itterate through the object 
let student = {
    name: "Deepak",
    age: 23,
    roll: "1OX21IS033",
    CGPA: 9.12
};

for (let key in student) {
    // console.log(key)  // so it will return the key 
    console.log("Key :", key, "Value :", student[key]);

}

//practice the question 
// Q1- printing the odd and even number in between 100

// let x = prompt("enter the number");
// for(let i=1;i<=x;i++)
// {
//   if(i%2===0)
//   {
//     console.log(i); //even number
//   }
// }


//Q2 Game for geessing the number 
// let userNum  = prompt("guess the number")
// let gameNumber = 35;
// while(userNum!=gameNumber)
// {
//     userNum=prompt("you enter wrong number guess again")
// }
// console.log("guess the right number ");

