class car {

    constructor(brand) {
        this.brand = brand;
        console.log("the object is created")
    }
    start() {
        console.log("the car is start")
    }
    running() {
        console.log("the class is running")

    }

    stop() {
        console.log("the car is stop")
    }

}

let bmw = new car("fortuner");
bmw.running();
bmw.start();
bmw.stop();
let lexsus = new car();
lexsus.start();
lexsus.running();
lexsus.stop();

let a ="sting 3+3"; 
console.log(typeof a); 


a =`string ${3+3}`;
console.log(a);