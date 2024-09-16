let div = document.querySelector("div");
console.log(div);

let idnameofdiv = div.getAttribute("id");
console.log(idnameofdiv); // outpit is =Box beacuse the name of id=box

let nameofattribute = div.getAttribute("name");
console.log(nameofattribute) //output is = JsDiv beacuse the name attribute is =jsDiv 

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

console.log(para.setAttribute("class", "bomb")) // we chage the class name paragraph to Bomb



// How to acces or cahnge the style of the element using java script

/*
so here we can change the color of the div 1 using the javascript style method
so using the style method we can access all the poperty of the css
and apply to our html tag and elemet
*/

let changeColor = document.getElementById("box1")
box1.style.backgroundColor = "green"
box1.style.fontSize = "38px"
box1.style.width = "500px"
// box1.style.visibility = "hidden"


//Insert element


/*
step 1:
this is the creation of the button tag and the p tag using the javascript 

*/
//creating 1st button and append into box1 to end
let btn = document.createElement("button");
btn.innerText = "Click me"
btn.style.border = "2px solid black"
btn.style.color = "red"

//creating 2nd button and append into box to at first
let btn2 = document.createElement("button");
btn2.innerText = "Click me"
btn2.style.border = "2px solid black"
btn2.style.color = "green"

//creating 3rd button and append  before box1 or outside the box1 
let btn3 = document.createElement("button");
btn3.innerText = "Click me"
btn3.style.border = "2px solid black"
btn3.style.color = "black"



//creating 3rd button and append  before box1 or outside the box1 
let btn4 = document.createElement("button");
btn4.innerText = "Click me"
btn4.style.border = "2px solid black"
btn4.style.color = "black"

let ptag = document.createElement("p");
ptag.innerText = "hii this is p tag an i was created using the js"

/*
After creating we have to append it
for appendin we have to select at which palace we want to insert the element
*/
let appendinbox1 = document.getElementById("box1");
appendinbox1.append(btn); // so it appned at the last of the first box1


let appendinbox2 = document.getElementById("box2");
appendinbox2.style.width = "300px"
appendinbox2.style.fontSize = "40px"
appendinbox2.style.backgroundColor = "blue"
appendinbox2.prepend(btn2);// so it put the button top of the box

let appendbefor = document.getElementById("box1");
appendbefor.before(btn3);

let appendafter = document.getElementById("box1")
appendafter.after(btn4);


//delete element 

//btn.remove() //it will delete the created button