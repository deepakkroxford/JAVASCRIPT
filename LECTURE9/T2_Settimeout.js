// // after 5 second the name deepak kumar singh will printed but it will run one time 
//  setTimeout(function () {
//     console.log("Deepak Kumar Singh")
// }, 5000)

// const changetext = function()
// {
//     const hii=document.querySelector('h1')
//     hii.innerHTML ='Hii this is your friend deepak Kumar Singh'
// }

// // after thee three second my text will be change
// const chnageme=setTimeout(changetext,3000);

// //using button we can stop the time out or normaly we can also do the same thing
// document.querySelector("#stop").addEventListener('click', function () {
//     console.log("it stop")
//     clearTimeout(chnageme);
// })


/*
Sheryians Coding 
*/

//synchronus menas -> synchronous code means ham ek sath ek kam krenge or ek k complete ho jane k bad agla kam krenge

console.log("hii how are you")
console.log("I am good what about you")
console.log("that good")

//asynchronous means -> ek sath hm kai task kr skte hai hame kisi ki wait krne ki jarurt nhi hai

console.log("how are you")
setTimeout(() => {
    console.log("I think 3 second and then reply him i am good")
}, 3000);


//callbacks function hamesa async code me answer aane par chalta hai 

/*
javascript is not a asynchronous language.....
It is a synchronus langugage
javascript is a single threaded language
It run the code such way that user fell the js is the asynchrouns language 

Now we move to the next important point how you tell that the js in not the asynchronous language

console.log("1")
setTimeout( function()
{
  console.log("2")
  },0) // so this 
console.log("3")

//output will be ---> 1,3,2 why?

so we have to concept called the minstack and sidestack

all the synchronous code goes into minstack
ans all the asynchronus code will goes into the sidestak

1,3 goes into minstack and 4 goes into the sidestack

in js the after the completion of the minstack the sidestak will run 
and this is done by the event loop 

Event loop is responsible for the moving the elemtn from side stack from to minstack

*/



