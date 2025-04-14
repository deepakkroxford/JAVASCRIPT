// The order of execution will be: 1, 4, 3, 2
// Here's why:
// 1. console.log(1) - Synchronous code, executes immediately
// 2. console.log(4) - Next synchronous code, executes immediately
// 3. Promise.resolve().then() - Microtask, executes after current synchronous code but before any macrotasks
// 4. setTimeout() - Macrotask, executes after all microtasks and synchronous code

console.log(1); // First
setTimeout(()=>{
    console.log(2); // Fourth
},0);
Promise.resolve().then(()=>{
    console.log(3); // Third
})
console.log(4) // Second


console.log("A"); // First
setImmediate(() => {
    console.log("B"); // Fourth
});
process.nextTick(() => {
    console.log("C is a microtask"); // Third
});
console.log("D"); // Second

// What will be the order of execution and why?
// The order of execution will be: A, D, C, B
// Here's why:
// 1. console.log("A") - Synchronous code, executes immediately
// 2. console.log("D") - Next synchronous code, executes immediately
// 3. process.nextTick() - Highest priority microtask, executes after current synchronous code but before any other tasks
// 4. setImmediate() - Macrotask, executes after all microtasks and synchronous code


// Microtasks in Node.js include:
// 1. Promises (Promise.resolve().then(), Promise.reject().catch())
// 2. process.nextTick() callbacks
// 3. queueMicrotask() callbacks
// 4. async/await operations (which use Promises under the hood)
// 5. MutationObserver callbacks (in browser environment)

// Examples of microtasks:
// Promise-based:
Promise.resolve().then(() => {
    console.log("Promise microtask");
});

// process.nextTick:
process.nextTick(() => {
    console.log("nextTick microtask");
});

// queueMicrotask:
queueMicrotask(() => {
    console.log("queueMicrotask microtask");
});

// Async/await:
(async () => {
    await Promise.resolve();
    console.log("Async/await microtask");
})();


// To run this test.js file:
// 1. Make sure you have Node.js installed
// 2. Open terminal in the directory containing test.js
// 3. Run the command: node test.js
// 4. Observe the output in the terminal

// The output will show the order of execution of synchronous code, microtasks, and macrotasks

// The order of execution for microtasks is:
// 1. process.nextTick() - Highest priority microtask
// 2. Promises and queueMicrotask() - Same priority, executed in order of creation
// 3. Async/await - Uses Promises under the hood

// Example showing the order:
process.nextTick(() => {
    console.log("1. nextTick microtask");
});

Promise.resolve().then(() => {
    console.log("2. Promise microtask");
});

queueMicrotask(() => {
    console.log("3. queueMicrotask microtask");
});

(async () => {
    await Promise.resolve();
    console.log("4. Async/await microtask");
})();

// Output will be:
// 1. nextTick microtask
// 2. Promise microtask
// 3. queueMicrotask microtask
// 4. Async/await microtask
