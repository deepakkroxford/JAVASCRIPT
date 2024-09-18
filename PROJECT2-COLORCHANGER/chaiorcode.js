
let buttons = document.querySelectorAll('.button');
let body = document.querySelector("body");
let reset = document.querySelector("#reset")
body.style.backgroundColor = "green";




buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (eve) {
        console.log("even is happingi")
        console.log(eve.target);
        //body.style.backgroundColor = eve.target.id;
        if (eve.target.id === 'grey') {
            body.style.backgroundColor = "gray"
        }
        else if (eve.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        else if (eve.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        else {
            body.style.backgroundColor = eve.target.id;
        }

        if (eve.target.id === 'black' || eve.target.id === 'red' || eve.target.id === 'blue') {
            eve.target.style.color = "white"
            eve.target.innerText = `${eve.target.id} clicked`

        }
        else {
            eve.target.innerText = `${eve.target.id} clicked`
        }


    })
})


//for reset the color
reset.addEventListener('click', function (res) {
    body.style.backgroundColor = "green"
     
})



/*
Step 1 -> First we select our button using the queryselectorAll
Step 2 -> Then we selet our body becuse we have to appyly color on the body
Step 3 -> we use forEach loop to traverse the all the button that we are make
Step 4 -> The next Step is we have to use the eventListner for each button 
Step 5 -> using the target function we can easyly find the id of each button and then we can easly change the color 

*/

