
//using this querySelector we can access all the boxes 
//and we give the class to the box so accesing the calass we have to use the .box
let allbox = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetgame");
let newgame = document.querySelector("#newgame")
let msgcontainer = document.querySelector(".msg-container");
let msg = document.getElementById('msg')
let turn0 = true; // palyerX player0
let count = 0;


const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]




const showWinner = (winner) => {
    msg.innerText = `Congratulation You Won the game ${winner}`
    msgcontainer.classList.remove("hide")
    disabledbutton();

}


//this is for the disable the box when the value is inserted 
const disabledbutton = () => {
    for (let box of allbox) {
        box.disabled = true;
    }
}


//this is also for enable the box when the game is reset 
const Enabledbutton = () => {
    for (let box of allbox) {
        box.disabled = false;
        box.innerText = "";
    }
}

//this code is for the reset the button 
const resetgame = () => {
    turn0 = true;
    Enabledbutton();
    msgcontainer.classList.add("hide")
}

const showDraw = () => {
    msg.innerText = "It's a draw!";
    msgcontainer.classList.remove("hide");
    disabledbutton();

};


//this code will put the value x and o in the box
allbox.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turn0 === true) {
            box.innerText = "X"

            turn0 = false;
        }
        else {
            box.innerText = "O"
            turn0 = true;
        }
        box.disabled = true;

        count++;
        console.log(count)
        CheckWinner();

    });
});

// this code is for the checking the winner 
const CheckWinner = () => {
    for (let pattern of winning) {
        let winnerfound = false;
        // console.log(pattern[0], pattern[1], pattern[2]);

        // console.log(allbox[pattern[0]].innerText,
        //     allbox[pattern[1]].innerText,
        //     allbox[pattern[2]].innerText);

        let pos1val = allbox[pattern[0]].innerText;
        let pos2val = allbox[pattern[1]].innerText;
        let pos3val = allbox[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log("winner")
                winnerfound = true;
                disabledbutton();
                showWinner(pos1val)
                return;
            }

        }

        if (count === 9 && winnerfound === false) {
            showDraw();
            count = 0;
        }
    }
}


newgame.addEventListener('click', resetgame);
resetbtn.addEventListener('click', resetgame)
