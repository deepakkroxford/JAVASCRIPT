class Person{
    constructor()
    {
        this.species = "Homo sapiens"
    }

    eat()
    {
        console.log("eat")
    }
}

class Engineer extends Person{
    constructor(branch)
    {
        super();
        this.branch = branch;
    }
    work()
    {
        super.eat()
        console.log("solve the proble build somthing")
    }
}

let engObj = new Engineer();

engObj.work();
