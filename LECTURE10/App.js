
/*
This is the url where we want to fetch the data
*/
let url = 'https://cat-fact.herokuapp.com/facts';

let fact = document.getElementById('fact')
let getbtn = document.getElementById('get')

// //fetching using async function 
//  const fetchfact= async function () 
// {
//     let response = await fetch(url);
//     console.log(response); //it return the object 
//     let data = await response.json();
//     console.log(data[0].text)
//     fact.innerHTML = data[1].text;
// }

// //creating an event listiner when we click the button the the data will fetch
// getbtn.addEventListener('click',function()
// {
//     console.log('button clicked')
//     fetchfact();
// })


/*
so line number 13 convert the json object in to data 
the api give us array with five value
(5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{status: {…}, _id: '58e008780aac31001185ed05', user: '58e007480aac31001185ecef', text: 'Owning a cat can reduce the risk of stroke and heart attack by a third.', __v: 0, …}
1
: 
{status: {…}, _id: '58e009390aac31001185ed10', user: '58e007480aac31001185ecef', text: 'Most cats are lactose intolerant, and milk can cau…our cat the standard: clean, cool drinking water.', __v: 0, …}
2
: 
{status: {…}, _id: '588e746706ac2b00110e59ff', user: '588e6e8806ac2b00110e59c3', text: 'Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.', __v: 0, …}
3
: 
{status: {…}, _id: '58e008ad0aac31001185ed0c', user: '58e007480aac31001185ecef', text: "The frequency of a domestic cat's purr is the same at which muscles and bones repair themselves.", __v: 0, …}
4
: 
{status: {…}, _id: '58e007cc0aac31001185ecf5', user: '58e007480aac31001185ecef', text: 'Cats are the most popular pet in the United States…here are 88 million pet cats and 74 million dogs.', __v: 0, …}
length
: 
5
[[Prototype]]
: 
Array(0)
*/


//using the promise chaing how we can achive this same work
function fetingfact() {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        fact.innerHTML = data[0].text;
        console.log('data.get')
    }).catch(function (error) {
        console.log(error)
    })
}

getbtn.addEventListener('click', function () {
    console.log('button clicked')
    fetingfact();
})

