let plusbtn = document.getElementById('plus-btn')
let minusbtn = document.getElementById('minus-btn');
let value = document.getElementById('value');
let count = 0;


let upadatecounter = (number) => {

    //when plus button was clicke
    count = count + number;
    value.innerText = count
    if (count >= 10) {
        plusbtn.setAttribute('disabled', true);
    }
    else {
        plusbtn.removeAttribute('disabled', false)
    }


    //when -minus button was clicked
    // count= count+value;
    if (count <= 0) {
        minusbtn.setAttribute('disabled', true);
    }
    else {
        minusbtn.removeAttribute('disabled', false)
    }

}


plusbtn.addEventListener('click', function () {
    // console.log(eve.target)
    // count++;
    // value.innerHTML = `${count}`
    // if (count > 10) {
    //     plusbtn.setAttribute('disabled', true);
    // }
    // else {
    //     plusbtn.removeAttribute('disabled', false)
    // }
    upadatecounter(1)

})


minusbtn.addEventListener('click', function (eve) {
    // console.log(eve.target)
    upadatecounter(-1);

})