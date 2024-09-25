// 2620.

// function counter(n) {
//     return function() {
//         return n++
//     }
// }
// let x =counter(2)();
// let y =counter(3)();
// let z =counter(4)();
// console.log(x, y,z);

// 2665. Counter II 

// function createCounter(init) {
//  let counterCount = init;
//     return {
//         increment: function increment() {
//             return ++counterCount
//         },
//         decrement: function decrement() {
//             return --counterCount
//         },
//         reset: function reset() {
//             return counterCount = init
//         }
//     }
// }
// var b = createCounter(50)
// console.log(b.increment());
// console.log(b.reset());
// console.log(b.decrement());

// 2635. Apply Transform Over Each Element in Array 
// callback function use case
var map = function(arr, fn) {
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
      transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
  };