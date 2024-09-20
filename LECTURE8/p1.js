
let data = "secret information"

class user{
    constructor(name,email)
    {
        this.name = name;
        this.email = email;
    }
    viewData()
    {
        console.log('website data',data)
    }

}

let student1 = new user("amansingh","abc@gmail.com");
console.log(student1.name)
console.log(student1.email)
let student2 = new user("deepak singh","deepakk@singh");

let teacher1 = new user('dean','dean@gmail.com')