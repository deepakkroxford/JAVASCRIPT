const genertatateBgColor = function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;

}


let change;
document.querySelector('#start').addEventListener('click', function () {
    if(!change){
    change = setInterval(function () {
        let body = document.querySelector('body');
        body.style.backgroundColor = genertatateBgColor();
    }, 1000)
}
})


document.querySelector('#stop').addEventListener('click', function () {
    console.log("stopinfg")
    clearInterval(change);
    change=null;
})

document.querySelector('#rest').addEventListener('click', function () {
        
       document.querySelector('body').style.backgroundColor='white';
       console.log("hii how are you")
       clearInterval(change);
       change=null;
})





