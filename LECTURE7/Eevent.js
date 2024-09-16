// let button = document.getElementById("btn1");
// button.onclick=()=>{
//     console.log("Handler 1")
// }

// //it will run 
// button.onclick=()=>{
//     console.log("Handler 2") // it overide the fist event handler
// }

// let button1 = document.getElementById("btn2")
// button1.onmouseover=(evt)=>{
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX,evt.clientY)
//   console.log("mouse over ")
// }


//event Listiner
// document.getElementById('btn1').addEventListener('click',function(){
//     console.log("button1 was clicked handler 1")
// })
// document.getElementById('btn1').addEventListener('click',function(){
//     console.log("button1 was clicked handler 2")
// })

// const handler3 = ()=>{
//   console.log("button1 was clicked handler 3")
// }

// document.getElementById('btn1').addEventListener('click',(handler3)=>{
//     console.log("button1 was clicked handler 3")
// })
// document.getElementById('btn1').addEventListener('click',function(){
//     console.log("button1 was clicked handler 4")
// })
// document.getElementById('btn1').addEventListener('click',function(){
//     console.log("button1 was clicked handler 5")
// })

// btn1.removeEventListener('click',handler3);


//making a button that change the display drark and light

let changeMode = document.querySelector('#Mode');
let currentMode = "Light";
changeMode.addEventListener('click',()=>{
    if(currentMode==="light")
    {
        currentMode="dark"
        document.querySelector('body').style.backgroundColor="black"
    }
    else{
        currentMode="light"
        document.querySelector('body').style.backgroundColor="white"

    }
    console.log(currentMode)
})




