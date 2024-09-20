const student={
    fullname:'deepak kumar singh',
    marks:98.9,
    printMarks : function(){
        console.log("marks",this.marks);
    }
}

const employee={
    calctax(){
        console.log('tax rate is 10%')
    },
};

const Amansing={
    salry:5000,
}


//in this case amansing1 has his own protype and other also 
//when object and protype has same method so object method is use
const Amansing1={
    salry:34322,
    calctax(){
        console.log("tax is 20%")
    }
}


const Amansing2={
    salry:823323,
}


Amansing.__proto__ = employee; 
Amansing1.__proto__=employee;
//here we assing the employee to amansing so now amansing can use the caltax() function
