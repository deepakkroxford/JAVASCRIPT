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



