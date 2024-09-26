const fruits  = ['Mango','Apple','Orange']

const myfruits = fruits;
myfruits.push('Dates')
myfruits.push('Grapes')
/*
so we added the two  new element in the myfruits but it also added 
in the frutis also the reasoon is when we create the array called fruits it take memory in the space 
and when we assisng teh value like this myfruits = fruits so in this case myfruits only refrence to fruits 
when we add some thing in one so it change the both 
*/
console.log(myfruits)
console.log(fruits)

console.log(typeof(myfruits))




//now it also happend with the object also ket see how it happening
const user1 = {
    firstname: 'Deepak',
    middlename:'Kumar',
    lastname : 'Singh'
}

const user2 = user1;
user2.lastname ="hero"; //it will change the user1 data also 
console.log(user2)
console.log(user1)

/*
so both user1 and user2 has same memory address. 
*/


/*
this will not happen in the string beacuse it create a new object in the memory when we update 
*/

//so the question is how we will copy the object beacuse the previous method is not good
// if we change one it change the other obejct also 

const patner1 ={
    name:'Boss',
    lastname :'singh',
}

// const patner2={};
// Object.assign(user2,user1);


const patner2 ={
    ...patner1 // this is the spread operator and this is used to assingn the value of patner1 in to patner2
}

console.log(patner2.name) // this will give the name of patenr1
patner2.name="Deepak kumar"
console.log(patner2.name) //so this change will reflect only one patner2 not in patner1
console.log(patner1.name)// it remain unchanged



//now see how copy in the arrya so array is also a object internaly 

const car1 =['bmw','audi','mahendra','scoda']
// const car2 =[...car1]; // it copy all the element from car 1 to car2
// console.log(car2)

// car2.push("farari")
// car2.push("lambo")
// //so the change in car1 does not reflect in car2
// console.log(car1) 
// console.log(car2)


//second method is concat

// const car2 =[].concat(car1)

// const car2 = [].slice(); 


const user3={
    firstname:"hii",
    lastname:'singh',

    pata:{
        city:'banglore',
        pincode:560068,
    },
    subject:['physic','cs','Maths']
}


const user4={
    ...user3
}

// Defination -- Shallow Copy
//in the shaollow copy we can copy at one level only so in user3 and user4 case
// if i change the name of user 4 it doesnot reflect on user 3 
//but problem arises when we have nested object in the one object
//so if we change the city or subject is reflect on user3 
// so this type of copy called as shallow copy


// Now we see How to do deep copy

const user5= JSON.parse(JSON.stringify(user3));
user5.subject.push('dbms');
console.log(user5)

console.log(user3)



//defination  Deep Copy

// -->So in the deep copy we can also copy the nested object that are present inside the one object 
// if the change done in one object doesnot reflect one other object 


