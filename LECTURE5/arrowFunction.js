const user = {
    username: "deepak@123",
    price: 234,
    message: function () {
        console.log(`${this.username} welcome to website`)
        console.log(this);
    }
}

user.message();
user.username = "ashish";
user.message();

console.log(this)


function chai() {
    let username = "amansingh";
    console.log(this.username);
}

chai();


/*
arrow function 
*/

// const addtwo = (num1 ,num2)=>{
//     return num1+num2;
// }

// const addTwo =(num1,num2)=>(num1+num2);
//  console.log(addTwo(34,67));

//how to return the object 

const addtwo = (num1, num2) => ({ username: "aman singh" })
console.log(addtwo(89, 90));



/*
practice question 
*/

let count = 0;
function vowelCount(word) {
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === 'a') {
            count++;
        }
        else if (word.charAt(i) === 'e') {
            count++;
        }
        else if (word.charAt(i) === 'i') {
            count++;
        }
        else if (word.charAt(i) === '0') {
            count++;
        }
        else if (word.charAt(i) === 'u') {
            count++;
        }
    }
    return count;
}

let word = "Iing";
console.log("the count of the number in the vowel is --->", vowelCount(word));


//Creating the arrow function to perform the same task

count = 0;
const countV = (sentance) => {
    sentance = sentance.toLowerCase();
    for (let i = 0; i < sentance.length; i++) {
        if (sentance.charAt(i) === 'a' || sentance.charAt(i) === 'e' || sentance.charAt(i) === 'i' || sentance.charAt(i) === '0' || sentance.charAt(i) === 'u') {
            count++;
        }
    }
    return count;
}

let sentance = "I love u";
console.log("the vowel in the sentence is ---->>", countV(sentance));









