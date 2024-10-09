// 2619. Array prototype last
// method definition, this keyword in a method
// let b = [1, 2, 3, 4, 5, 6]
// b.lastArr = function () {
//     return this[this.length - 1]
// }
// let a = b.lastArr()
// console.log(a);


// Arguments object - 
function a() {
    return console.log(arguments.length);
}
a(1, 2, 3, 4, 5)

// rest operator 
function myFun(...manyMoreArgs) {
    // console.log("a", a);
    // console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Spread operator 
const numbers = [1, 3, 5, 7, 10, 200, 90, 59];
function addNumbers(a, b, c, d) {
  return a + b + c + d;
}
console.log(addNumbers(...numbers));