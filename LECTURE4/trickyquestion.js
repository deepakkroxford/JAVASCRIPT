let arrx = [1, 2, , 4];
console.log(arrx.length);
console.log(arrx[2]);
console.log(arrx.hasOwnProperty(2));


/*
 length = 4
 undefined
 false
*/

console.log([] == []); //array
console.log({} == {}); // this object 
console.log([] == ![]); // this is array
/*
empty array not equal to empty arry beacuse their memory location are not same 
--> false

Similar to arrays, two different object literals are never equal. So this is also false.
--> false   

-- true

*/


console.log([10] + [20]); // converted to string 1020
console.log([10, 20] + [30, 40]); // 10 ,2030,40


let obj = { 
    0: 'a',
    1: 'b',
    2: 'c'
 };

let arrz = ['a', 'b', 'c'];
obj[0] = 'z';
arrz[0] = 'z';

console.log(obj['0']); // z
console.log(arrz['0']); //z
console.log(obj[0] === arrz[0]); //true



let arrb = [1, 2, 3, 4]; 
delete arrb[2];
console.log(arrb.length); //4
console.log(arrb[2]); //undefined

/*
delete array does not change the size of the array 
length =4 
= undefined
*/

