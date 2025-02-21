/*
Defination:  
Curring is the technique where a function does not tak all arguments at one time but insted
take them one by one. lets take an example to understand how curring works.
*/


//without curring

function add(a, b, c) {
    return a + b + c;
}
console.log(add(2, 3, 5)); // Output: 10


function add1(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        }
    }
}
console.log(add1(2)(3)(5)); // Output: 10



// Real life example of curring 
function createSlide(animal, color, size) {
    return `Slide: ${animal} | Color: ${color} | Size: ${size}`;
}

console.log(createSlide("Lion", "Yellow", "Large"));
console.log(createSlide("Elephant", "Grey", "Huge"));


// with curring

function createSlide(color) {
    return function (size) {
        return function (animal) {
            return `Slide: ${animal} | Color: ${color} | Size: ${size}`;
        };
    };
}

const yellowSlide = createSlide("Yellow"); // Background color set
const largeYellowSlide = yellowSlide("Large"); // Size set

console.log(largeYellowSlide("Lion")); // Slide: Lion | Color: Yellow | Size: Large
console.log(largeYellowSlide("Tiger")); // Slide: Tiger | Color: Yellow | Size: Large
