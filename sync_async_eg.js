"use strict";
// Synchronous 
console.log('One');
console.log('Two');
function logThree() {
    console.log('Three');
}
function sum(a, b) {
    console.log(a + b);
}
logThree();
console.log(sum(2, 3));
console.log('Four');
// Asynchronous Example.
console.log('One');
setTimeout(() => {
    console.log('Inside setTimeout');
}, 2000);
console.log('Two');
