let all = document.querySelector('#container');
let answer = document.getElementById('answer');
let conditon = document.getElementById('condition')
let res;
function caluclteBmi() {
    let height = parseInt(document.getElementById('height-field').value);
    let weight = parseInt(document.getElementById('weight-field').value);

    if (height < 0 || isNaN(height) || height === '') {
        answer.innerHTML = `enter the valid height ${height}`
        return false
    }
    else if (weight < 0 || isNaN(weight) || weight === '') {
        answer.innerHTML = `plz inter the valid weigth${weight}`
        return false;
    }
    else {
        res = Math.floor((weight / ((height * height) / 10000)));
        answer.innerHTML = `the Bmi of the person is ${res}`;
        return true
    }

}



//catogrige the person based on the their bmi
function catogrie() {
    if (res < 18) {
        conditon.innerHTML = ` you are under weight `

    }
    else if (res > 18 || res <= 25) {
        conditon.innerHTML = `you weight Is Normal`
    }
    else if (res > 25 || res <= 30) {
        conditon.innerText = `you are over weigth`
    }
    else {
        conditon.innerHTML = `you are obese`
    }
}
document.getElementById('Calculate').addEventListener('click', function (eve) {
    if (caluclteBmi()) {
        catogrie();
    }

})



// document.getElementById('Calculate').addEventListener('click',function()
// {
//     catogrie();
// })