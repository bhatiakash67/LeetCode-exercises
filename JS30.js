// 2620.

function counter(n) {
    return function() {
        return n++
    }
}
let x =counter(2)();
let y =counter(3)();
let z =counter(4)();
console.log(x, y,z);
