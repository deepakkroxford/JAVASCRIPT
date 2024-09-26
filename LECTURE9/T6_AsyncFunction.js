function getWeatherData() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Weather data');
            resolve('success');
        }, 2000);
    });
}

//Async function 
async function getData() {
    await getWeatherData(); // first this will excute then 
    // console.log(result1); // Handle the result if needed
    await getWeatherData(); //this
    // console.log(result2); // Handle the result if needed
};

function getdata(dataId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(dataId)
            resolve('succes')
        }, 3000)
    })
}

async function getalldata() {
    await getdata(1); //first this will excute 
    await getdata(2); //second this will excute 
    await getdata(3); //then this will excute

}
getalldata();




function itwillgivedata() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            let success = false;
            if(success)
            {

                console.log("Hi i am successfully registerd")
                resolve('the person is success full register')
            }
            else{
                console.log("some error is happing")
                reject('some erro durring the registration')
            }
        },3000)
    })
}


async function calling(params) {

    try{
        await itwillgivedata();
    }
    catch(error)
    {
        console.log("error in the code",error)
    }
   
    try{
        await itwillgivedata();
    }
    catch(error)
    {
        console.log("error in the code",error)
    }
}
calling();




// without async await
/*
how we fetch the data form the api 
so withot asyn we can fetch the data from the api but 
the complexity will be more wehen we use the then like we do in the case of the promisese
*/

function abcd()
{
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
        return raw.json(); //here we have to convert the data into json formet 
    }).then(function(actualdata){
        console.log(actualdata);
    })
}

abcd();


//using async awit function 

async function fetching() {
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log(ans);
}
