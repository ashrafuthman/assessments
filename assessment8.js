// premtive data types
let x = 10; // number
let y = x; // y is a copy of x
x = 20; // changing x does not affect y
console.log(x, y); // 20, 10

// object reference types
let a = { value: 10 }; // object
let b = a; // b is a reference to the same object as a
a.value = 20; // changing a affects b
console.log(a.value, b.value); // 20, 20
// it does not create a new object, it just points to the same object in memory

let number = 10; // primitive type

function increase(number) {
  number++;
  console.log(number); // prints 11
}
increase(number);  // number remains 10 outside the function, as primitives are passed by value
console.log(number); // 10

// object reference type
let obj = { value: 10 }; // object type
function increaseObject(obj) {
  obj.value++;
  console.log(obj.value); // prints 11
}
increaseObject(obj); // obj.value is now 11
console.log(obj.value); // 11, as objects are passed by reference