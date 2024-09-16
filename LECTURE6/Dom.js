console.dir(document);// it give the method or property of the document object

console.dir(document.body) // it give the all method of the body tag
console.dir(document.body.childNodes[1])//it will give the first child of the body 

document.body.childNodes[2].innerText = "fuck you";

//Dom manupulation technique 
/*
topic 1 - Selcting with id 
*/
let element = document.getElementById("heading");
console.log(element);


let element2 = document.getElementById("heading2");
console.log(element2);

/*
 topic 2 - Selcting with class
 */
let class1 = document.getElementsByClassName("c");
console.log(class1);


/*
 topic 3 - Selcting with tagname 
 */
let para = document.getElementsByTagName("p");
console.log(para);

//Query Selector

/*
 topic 1 - QuerySelector
 */

let firselement = document.querySelector("p");//first element like it give first p tag 
console.log(firselement);

/*
topic 2 - Query Selector all
*/
let allelement = document.querySelectorAll("p")// it give all p tag element that present in the html file
console.log(allelement);


//properties
/*
 topic 1 - Tagname 
 */
console.log(firselement.tagName);// it give the tagname of the element it give me p
console.log(element.tagName) //it give me h1

/*
 topic 2 - inner text
 */

let div = document.querySelectorAll("div");
console.log(div);// so in our html we have 3 div and we have to perform the operation on fruit div 
//so we can select by index
let div3 = div[2].innerText; //it only give the text not the tag
console.log(div3);

//we can aslo chnge the text using the inner text

element.innerText = "i change the heading to kya hal hai using innertext"




/*
topic 3 - inner html
*/
let innerhtmll = div[2].innerHTML;
console.log(innerhtmll)

element2.innerHTML = "<i>i changed the text of  heading two using innerhtml and i also use the tag italic</i>"


/*
 topic 4 - text-content
 */
const hero = document.getElementById("xyz")







