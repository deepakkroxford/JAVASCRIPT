// after 5 second the name deepak kumar singh will printed but it will run one time 
 setTimeout(function () {
    console.log("Deepak Kumar Singh")
}, 5000)

const changetext = function()
{
    const hii=document.querySelector('h1')
    hii.innerHTML ='Hii this is your friend deepak Kumar Singh'
}

// after thee three second my text will be change
const chnageme=setTimeout(changetext,3000);

//using button we can stop the time out or normaly we can also do the same thing
document.querySelector("#stop").addEventListener('click', function () {
    console.log("it stop")
    clearTimeout(chnageme);
})