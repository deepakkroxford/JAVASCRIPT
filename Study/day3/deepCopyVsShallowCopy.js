

/*
Creating the problem when we pass the refrence
*/
let deepak =["mangoes","oranges","cherry"];
console.log(deepak);

/*
passing the refrence of deepak to vishal
*/
let vishal = deepak;
console.log(vishal);
vishal.push("banana");
console.log("change made by vishal",vishal);
console.log("reflect on deepak also",deepak);

/*
problem in object 
*/

let student1={
    name:"riya kumari",
    age:23,
    roll:"1OX21IS033",
    CGPA:9.12
}

console.log(student1);

let student2=student1;
console.log(student2);
student2.age = 34;
console.log("change made by student2",student2);
console.log("reflect on student1 also",student1);


// shallow copy ;

let student3={
    name:"riya kumari",
    age:23,
    roll:"1OX21IS033",
    CGPA:9.12,
    subjects:['physics','maths','chemistry'],
    place:{
        village:"ara jila",
        pincode:560068,
    }
}
console.log(student3)

// this is how we do the shallow copy
let student4={
    ...student3  // this is the way we do the shallow copy
}
// console.log(student4);


// student4.name="vishal";
// student4.age=25;
// student4.subjects.push("english");

// // it will change the student 3 values becuse we are performing the shallow copy and 
// student4.place.village="jalpura"
// console.log(student4);
// console.log(student3);


// deep copy 
let student5 = JSON.parse(JSON.stringify(student3));
student5.name="deepak kumar singh";
student5.age =22;
student5.place.village="paithanpur";
console.log(student3);
console.log(student5); 







