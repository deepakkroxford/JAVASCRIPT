//the SetInterval is diffrent it execute the same thing after pausing some time 
   const names = setInterval(function () {
        console.log("i am deepak kumar singh",Date.now())
    }, 2000)



clearInterval(names)

let count=0;
let namess;
document.querySelector('#start').addEventListener('click',function()
{
  namess = setInterval(function()
  {
        console.log("the set interval is start")
        count++;
        document.getElementById('counter').innerText=count;
        console.log(count)
        
   },1000)
});

document.querySelector('#stop').addEventListener('click',function()
{
    clearInterval(namess)
    count=0;
    console.log("interval stop")
})


