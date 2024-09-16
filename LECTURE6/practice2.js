let newButton =document.createElement("button");
newButton.innerText="click me";
newButton.style.backgroundColor="pink"
newButton.style.color ="white";

document.querySelector("body").prepend(newButton)


// q2

let para = document.querySelector("p");
para.getAttribute("class");
 para.setAttribute("class","Content") // it will change the color or overide the style that we given to previus class


para.classList.add("newClass")