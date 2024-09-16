console.log("hii we are solving the practice question")

let hello = document.querySelector("h1");
hello.innerHTML= hello.innerText+" from apna college student" //concatination

let divs = document.querySelectorAll(".box");



//manualy we can do like this  
divs[0].innerText ="Hi i am the first Div"
divs[1].innerText = "Hii i am the second Div"
divs[2].innerText = "Hii i am the Third Div"

//using loop we can do like this
let index = 1;
for(x of divs)
{
    console.log(x.innerText);
    x.innerText = `new unique value ${index}`
    index++;
}



