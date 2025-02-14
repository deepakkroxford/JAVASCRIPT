/* 
Let take a one problem statement  then we understand why we 
need asyn await and promises and callbacks.
*/

let datas = [
    {
        "name" :"deepak kumar singh",
        "age":23,
        "roll":"1OX21IS033",
        "CGPA":9.12
    },
    {
        "name" :"Vishal Singh",
        "age":23,
        "roll":"1OX21IS033",
        "CGPA":9.12
    }
]

function getdata(){
    setTimeout(()=>{
        let output = "";
        datas.forEach((data,index) => {
            output += `<li>${data.name}</li>`;
        });
        console.log(output);
        document.body.innerHTML=output;
    },1000)
   
}

function createdata(newdata, callback){
    setTimeout(()=>{
        datas.push(newdata);
        console.log("New data added:", datas);
        callback();  
    }, 2000);
}

//createdata({name:"rahul singh",age:23,roll:"1OX21IS033",CGPA:9.12});
createdata({name:"rahul singh",age:23,roll:"1OX21IS033",CGPA:9.12},getdata);
/*
 function createdata(newdata,callback){
    setTimeout(()=>{
        datas.push(newdata);
        callback();
        
    },2000)
}
*/

/*
Why New Data Is Not Rendered:
By the time createdata() finishes adding the new data, the getdata() function has already executed and rendered the initial state of datas.
*/

/*
we can use the callback : A callback function is a function that is passed as an argument to another function and is executed later (or "called back") inside that function.
*/
/*
for solving we can pass the getdata() as argument inthe createdata function 
*/



// // use of the promises 
function createDataUsingPromise(newdata){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let err =false;
            if(err)
            {
                reject("error in creating data");
            }
            else{
            resolve("their is no error in the message");
            }
       getdata },2000);
    });
}
createDataUsingPromise({name:"rahul singh",age:23,roll:"1OX21IS033",CGPA:9.12}).
then(getdata).
catch((error)=>console.log(error));
