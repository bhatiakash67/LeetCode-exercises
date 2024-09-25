// 2619. Array prototype last
// method definition, this keyword in a method
let b = [1,2,3,4,5,6]
b.lastArr = function(){
    return this[this.length-1]
}
let a =b.lastArr()
console.log(a);