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
// var map = function (arr, fn) {
//   const transformedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     transformedArr[i] = fn(arr[i], i);
//   }
//   return transformedArr;
// };

// 2634. Filter Elements from array
// function add(n) {
//   let newArr = []
//   for (let i = 0; i < n.length; i++) {
//     if (i > 2) {
//       newArr.push(n[i])
//     }
//   }
//   return newArr
// }
// let a = [1, 2, 3, 4, 5]
// console.log(add(a));

// function filter(arr, fn) {
//   let updatedArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(n[i], i)) {
//       updatedArr.push(arr[i])
//     }
//   }
//   return updatedArr
// }

// 2626. Array reduce transformation

function reduce(nums, fn, init) {
  let newVal = init
  for (let i = 0; i < nums.length; i++) {
    newVal = fn(newVal, nums[i])
  }
  return newVal
}

let a = [1, 2, 3, 4, 5, 6]
let result = a.reduce((acc, curr) => acc + curr)
console.log(result);

