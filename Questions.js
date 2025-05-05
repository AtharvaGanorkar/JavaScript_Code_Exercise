// What is the output of below code

var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

// 1: Undefined
// 2: ReferenceError
// 3: null
// 4: {model: "Honda", color: "white", year: "2010", country: "UK"}


// Answer: 4
// The function declarations are hoisted similar to any variables. 
// So the placement for Vehicle function declaration doesn't make any difference.

// ------------------------------------------------------------------------------------------

// Question 2 :

function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
  }
  
  console.log(foo(), typeof x, typeof y);

//   1: 1, undefined and undefined
//   2: ReferenceError: X is not defined
//   3: 1, undefined and number
//   4: 1, number and number

  
//   Answer: 3
//   Of course the return value of foo() is 1 due to the increment operator. 
//   But the statement let x = y = 0 declares a local variable x. 
//   Whereas y declared as a global variable accidentally. 
  
//   This statement is equivalent to,
  
  let x;
  window.y = 0;
  x = window.y;
  
//   Since the block scoped variable x is undefined outside of the function, 
//   the type will be undefined too. Whereas the global variable y is available outside the function,
//    the value is 0 and type is number.

// ------------------------------------------------------------------------------------------
// Question 3 :
// What is the output of below code

function main() {
    console.log("A");
    setTimeout(function print() {
      console.log("B");
    }, 0);
    console.log("C");
  }
  main();
//   1: A, B and C
//   2: B, A and C
//   3: A and C
//   4: A, C and B


  
//   Answer: 4
//   The statements order is based on the event loop mechanism. The order of statements follows the below order,
  
//   At first, the main function is pushed to the stack.
//   Then the browser pushes the first statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.
//   But setTimeout statement moved to Browser API to apply the delay for callback.
//   In the meantime, C's console.log added to stack, executed and popped out.
//   The callback of setTimeout moved from Browser API to message queue.
//   The main function popped out from stack because there are no statements to execute
//   The callback moved from message queue to the stack since the stack is empty.
//   The console.log for B is added to the stack and display on the console.
  
// -------------------------------------------------------------------------------------------

// Question 4 :
// What is the output of below equality check

console.log(0.1 + 0.2 === 0.3);
// 1: false
// 2: true

Answer: 1
// This is due to the float point math problem. Since the floating point numbers are encoded in binary format,
//  the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't 
//  give expected results. You can find more details about the explanation here 0.30000000000000004.com/

// -------------------------------------------------------------------------------------------
// Question 5 :
// What is the output of below code

var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

// 1: 1function
// 2: 1object
// 3: ReferenceError
// 4: 1undefined


Answer: 4
// The main points in the above code snippets are,

// You can see function expression instead function declaration inside if statement. So it always returns true.
// Since it is not declared(or assigned) anywhere, f is undefined and typeof f is undefined too.
// In other words, it is same as

var y = 1;
if ("foo") {
  y += typeof f;
}
console.log(y);

// ----------------------------------------------------------------------------------------------------

// Question 6 :
// What is the output of below code

function foo() {
    return;
    {
      message: "Hello World"
    }
  }
  console.log(foo());
  
//   1: Hello World
//   2: Object {message: "Hello World"}
//   3: Undefined
//   4: SyntaxError

  
//   Answer: 3
//   This is a semicolon issue. Normally semicolons are optional in JavaScript. 
//   So if there are any statements(in this case, return) missing semicolon, 
//   it is automatically inserted immediately. Hence, the function returned as undefined.
  
//   Whereas if the opening curly brace is along with the return keyword then the function is going to be returned as expected.
  
  function foo() {
    return {
      message: "Hello World",
    };
  }
  console.log(foo()); // {message: "Hello World"}

//   ----------------------------------------------------------------------------------------------------

// Question 7 :
// What is the output of below code

var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

// 1: [empty, 'b', 'c', 'd'], empty, 3
// 2: [null, 'b', 'c', 'd'], empty, 3
// 3: [empty, 'b', 'c', 'd'], undefined, 4
// 4: [null, 'b', 'c', 'd'], undefined, 4


// Answer: 3
// The delete operator will delete the object property but it will not reindex the array or change its length.
//  So the number or elements or length of the array won't be changed. 
//  If you try to print myChars then you can observe that it doesn't set an undefined value, 
//  rather the property is removed from the array. The newer versions of Chrome use empty instead of undefined 
//  to make the difference a bit clearer

// ---------------------------------------------------------------------------------------------------------

// Question 8 :
// What is the output of below code in latest Chrome

var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);

// 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
// 2: [empty × 3], [empty × 2, 100], [empty × 3]
// 3: [null × 3], [null × 2, 100], [null × 3]
// 4: [], [100], []


// Answer: 2
// The latest chrome versions display sparse array(they are filled with holes) using this empty x n notation. 
// Whereas the older versions have undefined x n notation. Note: The latest version of FF displays n empty slots notation.

// ----------------------------------------------------------------------------------------------------------
// Question 9 :
// What is the output of below code

const obj = {
    prop1: function () {
      return 0;
    },
    prop2() {
      return 1;
    },
    ["prop" + 3]() {
      return 2;
    },
  };
  
  console.log(obj.prop1());
  console.log(obj.prop2());
  console.log(obj.prop3());

  //   1: 0, 1, 2
//   2: 0, { return 1 }, 2
//   3: 0, { return 1 }, { return 2 }
//   4: 0, 1, undefined

  
//   Answer: 1
//   ES6 provides method definitions and property shorthands for objects. 
//   So both prop2 and prop3 are treated as regular function values.
  
// -------------------------------------------------------------------------------------------

// Question 10 :
// What is the output of below code

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// 1: true, true
// 2: true, false
// 3: SyntaxError, SyntaxError,
// 4: false, false

Answer: 2
// The important point is that if the statement contains the same operators(e.g, < or >) 
// then it can be evaluated from left to right. The first statement follows the below order,

console.log(1 < 2 < 3);
console.log(true < 3);
console.log(1 < 3); // True converted as 1 during comparison
// True
// Whereas the second statement follows the below order,

console.log(3 > 2 > 1);
console.log(true > 1);
console.log(1 > 1); // False converted as 0 during comparison
// False
  
// ----------------------------------------------------------------------------------------------------------

// Question 11 :
// What is the output of below code

function printNumbers(first, second, first) {
    console.log(first, second, first);
  }
  printNumbers(1, 2, 3);

  //   1: 1, 2, 3
//   2: 3, 2, 3
//   3: SyntaxError: Duplicate parameter name not allowed in this context
//   4: 1, 2, 1

  
//   Answer: 2
//   In non-strict mode, the regular JavaScript functions allow duplicate named parameters. 
//   The above code snippet has duplicate parameters on 1st and 3rd parameters. 
//   The value of the first parameter is mapped to the third argument which is passed to the function. 
//   Hence, the 3rd argument overrides the first parameter.
  
//   Note: In strict mode, duplicate parameters will throw a Syntax Error.

// -------------------------------------------------------------------------------------------

// Question 12 :
// What is the output of below code

const arrowFun = () => arguments.length;
console.log(arrowFun(1, 2, 3));

// 1: ReferenceError: arguments is not defined
// 2: 3
// 3: undefined
// 4: null


// Answer: 1
// Arrow functions do not have an arguments, super, this, or new.target bindings. So any reference to arguments variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

// Where as the normal function provides the number of arguments passed to the function

const func = function () {
  return arguments.length;
};
console.log(func(1, 2, 3));
// But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));

// ----------------------------------------------------------------------------------------------------------

// Question 13 :
// What is the output of below code

console.log(Math.max());

// 1: undefined
// 2: Infinity
// 3: 0
// 4: -Infinity


// Answer: 4
// -Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, 
// -Infinity is going to be returned.
//  Note: Zero number of arguments is a valid case.

// ----------------------------------------------------------------------------------------------------------

// Question 14 :
// What is the output of below code

console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);

// 1: True, True
// 2: True, False
// 3: False, False
// 4: False, True


// Answer: 1
// As per the comparison algorithm in the ECMAScript specification(ECMA-262), 
// the above expression converted into JS as below

// 10 === Number([10].valueOf().toString()); // 10
// So it doesn't matter about number brackets([]) around the number, 
// it is always converted to a number in the expression.

// -------------------------------------------------------------------------------------------

// Question 15 :
// What is the output of below code

console.log(10 + "10");
console.log(10 - "10");

// 1: 20, 0
// 2: 1010, 0
// 3: 1010, 10-10
// 4: NaN, NaN


// Answer: 2
// The concatenation operator(+) is applicable for both number and string types. 
// So if any operand is string type then both operands concatenated as strings. 
// Whereas subtract(-) operator tries to convert the operands as number type.

// --------------------------------------------------------------------------------------------

// Question 16 :
// What is the output of below code

console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}

// 1: True, I'm True
// 2: True, I'm False
// 3: False, I'm True
// 4: False, I'm False


// Answer: 1
// In comparison operators, the expression [0] converted to Number([0].valueOf().toString()) which is resolved to false. 
// Whereas [0] just becomes a truthy value without any conversion because there is no comparison operator.

// -------------------------------------------------------------------------------------------

// Question 17 :
// What is the output of below code

console.log([1, 2] + [3, 4]);

// 1: [1,2,3,4]
// 2: [1,2][3,4]
// 3: SyntaxError
// 4: 1,23,4


// Answer: 4
// The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.

// -------------------------------------------------------------------------------------------

// Question 18 :
// What is the output of below code

const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);

// 1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
// 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
// 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
// 4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}


// Answer: 1
// Since Set object is a collection of unique values, 
// it won't allow duplicate values in the collection. At the same time, it is case sensitive data structure

// ---------------------------------------------------------------------------------

// Question 19 :
// What is the output of below code

console.log(NaN === NaN);
// 1: True
// 2: False

Answer: 2
// NaN is not equal to any value including itself. So the above expression is always false.
// Note: You can use Object.is() method to check the equality of NaN        

// console.log(Object.is(NaN, NaN)); // True

// ------------------------------------------------------------------------------------------

// Question 20 :
// What is the output of below code

let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));

// 1: 4
// 2: NaN
// 3: SyntaxError
// 4: -1


// Answer: 4
// The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to false. 
// Since indexOf won't be able to find NaN inside an array, it returns -1 always.
//  But you can use Array.prototype.findIndex method to find out the index of NaN in an array or You can use 
//  Array.prototype.includes to check if NaN is present in an array or not.

let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true

// ------------------------------------------------------------------------------------------

// Question 21 :
// What is the output of below code

async function func() {
    return 10;
  }
  console.log(func());
  
//   1: Promise {<fulfilled>: 10}
//   2: 10
//   3: SyntaxError
//   4: Promise {<rejected>: 10}

  
  {/* Answer: 1
  Async functions always return a promise. But even if the return value of an async function is not explicitly a promise, 
  it will be implicitly wrapped in a promise. The above async function is equivalent to below expression, */}
  
  function func() {
    return Promise.resolve(10);
  }

//   ------------------------------------------------------------------------------------------

// Question 22 :
// What is the output of below code

async function func() {
    await 10;
  }
  console.log(func());
  
//   1: Promise {<fulfilled>: 10}
//   2: 10
//   3: SyntaxError
//   4: Promise {<resolved>: undefined}

  
  {/* Answer: 4
  The await expression returns value 10 with promise resolution and the code after each await expression can be 
  treated as existing in a .then callback. In this case, there is no return expression at the end of the function. 
  Hence, the default return value of undefined is returned as the resolution of the promise. 
  The above async function is equivalent to below expression, */}
  
  function func() {
    return Promise.resolve(10).then(() => undefined);
  }
  
//  ------------------------------------------------------------------------------------------\

// Question 23 :
// What is the output of below code

function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  async function delayedLog(item) {
    await delay();
    console.log(item);
  }
  
  async function processArray(array) {
    array.forEach(item => {
      await delayedLog(item);
    })
  }
  
  processArray([1, 2, 3, 4]);
  
//   1: SyntaxError
//   2: 1, 2, 3, 4
//   3: 4, 4, 4, 4
//   4: 4, 3, 2, 1

  
//   Answer: 1
//   Even though “processArray” is an async function, the anonymous function that we use for forEach is synchronous. 
//   If you use await inside a synchronous function then it throws a syntax error.
  
// -------------------------------------------------------------------------------------------
// Question 24 :
// What is the output of below code
  
function delay() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  async function delayedLog(item) {
    await delay();
    console.log(item);
  }
  
  async function process(array) {
    array.forEach(async (item) => {
      await delayedLog(item);
    });
    console.log("Process completed!");
  }
  process([1, 2, 3, 5]);

//   1: 1 2 3 5 and Process completed!
//   2: 5 5 5 5 and Process completed!
//   3: Process completed! and 5 5 5 5
//   4: Process completed! and 1 2 3 5
  
//   Answer: 4
//   The forEach method will not wait until all items are finished but it just runs the tasks and goes next. 
// Hence, the last statement is displayed first followed by a sequence of promise resolutions.
  
//   But you control the array sequence using for..of loop,
  
  async function processArray(array) {
    for (const item of array) {
      await delayedLog(item);
    }
    console.log("Process completed!");
  }

// -------------------------------------------------------------------------------------------

// Question 25 :
// What is the output of below code

var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);

// 1: Set(4) {"+0", "-0", NaN, undefined}
// 2: Set(3) {"+0", NaN, undefined}
// 3: Set(5) {"+0", "-0", NaN, undefined, NaN}
// 4: Set(4) {"+0", NaN, undefined, NaN}


// Answer: 1
// Set has few exceptions from equality check,

// All NaN values are equal
// Both +0 and -0 considered as different values

// --------------------------------------------------------------------------------------------

// Question 26 :
// What is the output of below code

const [x, ...y, z] = [1, 2, 3, 4];
console.log(x, y, z);

// 1: 1, [2, 3], 4
// 2: 1, [2, 3, 4], undefined
// 3: 1, [2], 3
// 4: SyntaxError


// Answer: 4
// It throws a syntax error because the rest element should not have a trailing comma. 
// You should always consider using a rest operator as the last element.

// -------------------------------------------------------------------------------------------

// Question 27 :
// What is the output of below code

const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
console.log(y);

// 1: 30, 20
// 2: 10, 20
// 3: 10, undefined
// 4: 30, undefined


// Answer: 1
// The object property follows below rules,

// The object properties can be retrieved and assigned to a variable with a different name
// The property assigned a default value when the retrieved value is undefined

// -------------------------------------------------------------------------------------------\

// Question 28 :
// What is the output of below code

function area({ length = 10, width = 20 }) {
    console.log(length * width);
  }
  
  area();

  //   1: 200
//   2: Error
//   3: undefined
//   4: 0

  
//   Answer: 2
//   If you leave out the right-hand side assignment for the destructuring object, 
//   the function will look for at least one argument to be supplied when invoked. 
//   Otherwise you will receive an error Error: Cannot read property 'length' of undefined as mentioned above.
  
//   You can avoid the error with either of the below changes,
  
//   Pass at least an empty object:
  
function area({ length = 10, width = 20 }) {
    console.log(length * width);
  }
  
area({});
  
//   Assign default empty object:
  
function area({ length = 10, width = 20 } = {}) {
    console.log(length * width);
  }
  
area();

// -------------------------------------------------------------------------------------------

// Question 29 :
// What is the output of below code

function add(item, items = []) {
    items.push(item);
    return items;
  }
  
  console.log(add("Orange"));
  console.log(add("Apple"));

//   1: ['Orange'], ['Orange', 'Apple']
//   2: ['Orange'], ['Apple']

  
//   Answer: 2
//   Since the default argument is evaluated at call time, a new object is created each time the function is called. 
//   So in this case, the new array is created and an element pushed to the default empty array.
  
// -------------------------------------------------------------------------------------------

// Question 30 :
// What is the output of below code

function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs);
  }
  
  myFun(1, 2, 3, 4, 5);
  myFun(1, 2);

  //   1: [3, 4, 5], undefined
//   2: SyntaxError
//   3: [3, 4, 5], []
//   4: [3, 4, 5], [undefined]

  
//   Answer: 3
//   The rest parameter is used to hold the remaining parameters of a function 
//   and it becomes an empty array if the argument is not provided.

// ---------------------------------------------------------------------------------

// Question 31 :
// What is the output of below code

const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}

// 1: 100
// 2: ReferenceError

// Answer: 2
// Unlike function declarations, class declarations are not hoisted. i.e, 
// First You need to declare your class and then access it, 
// otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".

// Note: Class expressions also applies to the same hoisting restrictions of class declarations.

// ------------------------------------------------------------------------------------------

// Question 32 :
// What is the output of below code

class Vehicle {
    constructor(name) {
      this.name = name;
    }
  
    start() {
      console.log(`${this.name} vehicle started`);
    }
  }
  
  class Car extends Vehicle {
    start() {
      console.log(`${this.name} car started`);
      super.start();
    }
  }
  
  const car = new Car("BMW");
  console.log(car.start());

  //   1: SyntaxError
//   2: BMW vehicle started, BMW car started
//   3: BMW car started, BMW vehicle started
//   4: BMW car started, BMW car started

  
//   Answer: 3
//   The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. 
//   i.e, The statements will be executed in the same order of code.

// -------------------------------------------------------------------------------------------

// Question 33 :
// What is the output of below code

let zero = new Number(0);

if (zero) {
  console.log("If");
} else {
  console.log("Else");
}

// 1: If
// 2: Else
// 3: NaN
// 4: SyntaxError

// Answer: 1
// The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object.
// Objects are always truthy in if block
// Hence the above code block always goes to if section.

// -------------------------------------------------------------------------------------------

// Question 34 :
// What is the output of below code

let msg = "Good morning!!";

msg.name = "John";

console.log(msg.name);

// 1: ""
// 2: Error
// 3: John
// 4: Undefined


// Answer: 4
// It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, 
// the wrapper object is going to be created and get the mentioned property. 
// But the object get disappeared after accessing the property in next line.

// -------------------------------------------------------------------------------------------

// Question 35 :
// What is the output of below code

let count = 10;

(function innerFunc() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();

// 1: 11, 10
// 2: 11, 11
// 3: 10, 11
// 4: 10, 10


// Answer: 1
// 11 and 10 is logged to the console.

// The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. 
// But the conditional has another local variable count which overwrites the ourter count variable. 
// So the first console.log displays value 11.
// Whereas the second console.log logs 10 by capturing the count variable from outerscope.

// -------------------------------------------------------------------------------------------

// Question 36 :
// Write a function that returns a random HEX color

// Solution 1 (Iterative generation)

const HEX_ALPHABET = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const HEX_PREFIX = "#";
const HEX_LENGTH = 6;

function generateRandomHex() {
  let randomHex = "";

  for (let i = 0; i < HEX_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * HEX_ALPHABET.length);
    randomHex += HEX_ALPHABET[randomIndex];
  }

  return HEX_PREFIX + randomHex;
}

// Solution 2 (One-liner)

const HHEX_PREFIX = "#";
const HEX_RADIX = 16;
const HHEX_LENGTH = 6;

function generateRandomHex() {
  return (
    HHEX_PREFIX +
    Math.floor(Math.random() * 0xffffff)
      .toString(HEX_RADIX)
      .padStart(HHEX_LENGTH, "0")
  );
}


// --------------------------------------------------------------------------------------------

// Question 37 :
// What is the output of below code

const nnnumbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort();
console.log(nnnumbers);

// 1: [11, 18, 23, 25, 31, 33, 200]
// 2: [11, 18, 200, 23, 25, 31, 33]
// 3: [11, 25, 31, 23, 33, 18, 200]
// 4: Cannot sort numbers


// Answer: 2
// By default, the sort method sorts elements alphabetically. 
// This is because elemented converted to strings and strings compared in UTF-16 code units order. 
// Hence, you will see the above numbers not sorted as expected. 
// In order to sort numerically just supply a comparator function which handles numeric sorts.

const nnumbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort((a, b) => a - b);
console.log(nnumbers);

// Note: Sort() method changes the original array.

// -------------------------------------------------------------------------------------------

// Question 38 :
// What is the output of below code

setTimeout(() => {
    console.log("1");
  }, 0);
  Promise.resolve("hello").then(() => console.log("2"));
  console.log("3");
  
//   1: 1, 2, 3
//   2: 1, 3, 2
//   3: 3, 1, 2
//   4: 3, 2, 1
    
//   Answer: 4
//   When the JavaScript engine parses the above code, the first two statements are asynchronous which will
//    be executed later and third statement 
//   is synchronous statement which will be moved to callstack, 
//   executed and prints the number 3 in the console. Next, 
//   Promise is native in ES6 and it will be moved to Job queue which has high priority than callback queue 
//   in the execution order. At last, since setTimeout is part of WebAPI the callback function 
//   moved to callback queue and executed. Hence, you will see number 2 printed first followed by 1.

// -------------------------------------------------------------------------------------------

// Question 39 :
// What is the output of below code

message();

function message() {
  console.log("Hello");
}
function message() {
  console.log("Bye");
}

// 1: Reference error: message is not defined
// 2: Hello
// 3: Bye
// 4: Compile time error

// Answer: 3
// As part of hoisting, initially JavaScript Engine or compiler will store first function in heap memory 
// but later rewrite or replaces with redefined function content.

// ---------------------------------------------------------------------------------

// Question 40 :
// What is the output of below code

const user = {
    name: "John",
    eat() {
      console.log(this);
      var eatFruit = function () {
        console.log(this);
      };
      eatFruit();
    },
  };
  user.eat();

//   1: {name: "John", eat: f}, {name: "John", eat: f}
//   2: Window {...}, Window {...}
//   3: {name: "John", eat: f}, undefined
//   4: {name: "John", eat: f}, Window {...}
  
// Answer: 4
// this keyword is dynamic scoped but not lexically scoped . 

// In other words, it doesn't matter where this has been written but how it has been invoked really matter. 
// In the above code snippet, the user object invokes eat function,
//  so this keyword refers to user object but eatFruit has been invoked by eat function and this will have default Window object.
  
//   The above pit fall fixed by three ways,
  
//   In ES6, the arrow function will make this keyword as lexically scoped. 
// Since the surrounding object of this object is user object, the eatFruit function will contain user object for this object.
  
const user = {
    name: "John",
    eat() {
      console.log(this);
      var eatFruit = () => {
        console.log(this);
      };
      eatFruit();
    },
  };
  user.eat();

//   The next two solutions have been used before ES6 introduced.
  
//   It is possible create a reference of this into a separate variable and use that new variable inplace of 
// this keyword inside eatFruit function. This is a common practice in jQuery and AngularJS before ES6 introduced.
  
const user = {
    name: "John",
    eat() {
      console.log(this);
      var self = this;
      var eatFruit = () => {
        console.log(self);
      };
      eatFruit();
    },
  };
  user.eat();
 
//   The eatFruit function can bind explicitly with this keyword where it refers Window object.
  
const user = {
    name: "John",
    eat() {
      console.log(this);
      var eatFruit = function () {
        console.log(this);
      };
      return eatFruit.bind(this);
    },
  };
  user.eat()();
  
// -------------------------------------------------------------------------------------------

// Question 41 :
// What is the output of below code

let message = "Hello World!";
message[0] = "J";
console.log(message);

let name = "John";
name = name + " Smith";
console.log(name);

// 1: Jello World!, John Smith
// 2: Jello World!, John
// 3: Hello World!, John Smith
// 4: Hello World!, John


// Answer: 3
// In JavaScript, primitives are immutable i.e. there is no way to change a primitive value once it gets created. 
// So when you try to update the string's first character, there is no change in the string value 
// and prints the same initial value Hello World!. Whereas in the later example, 
// the concatenated value is re-assigned to the same variable which will result into creation of new memory block 
// with the reference pointing to John Smith value and the old memory block value(John) will be garbage collected.

// -------------------------------------------------------------------------------------------

// Question 42 :
// What is the output of below code

const a = new Number(10);
const b = 10;
console.log(a === b);

// 1: False
// 2: True


// Answer: 1
// Eventhough both variables a and b refer a number value, the first declaration is based on constructor function 
// and the type of the variable is going to be object type. Whereas the second declaration is primitive assignment 
// with a number and the type is number type. Hence, the equality operator === will output false value.

// -------------------------------------------------------------------------------------------

// Question 43 :
// What is the output of below code

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));

// 1: [{status: "fulfilled", value: undefined}, {status: "rejected", reason: undefined}]
// 2: [{status: "fulfilled", value: undefined}, Uncaught(in promise)]
// 3: Uncaught (in promise)
// 4: [Uncaught(in promise), Uncaught(in promise)]


// Answer: 3
// The above promises settled at the same time but one of them resolved and other one rejected.
//  When you use .all method on these promises, the result will be short circuted by throwing an error due 
//  to rejection in second promise. But If you use .allSettled method then result of both the promises 
//  will be returned irrespective of resolved or rejected promise status without throwing any error.

Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));

// --------------------------------------------------------------------------------------------

// Question 44 :
// What is the output of below code

try {
    setTimeout(() => {
      console.log("try block");
      throw new Error(`An exception is thrown`);
    }, 1000);
  } catch (err) {
    console.log("Error: ", err);
  }
  
//   1: try block, Error: An exception is thrown
//   2: Error: An exception is thrown
//   3: try block, Uncaught Error: Exception is thrown
//   4: Uncaught Error: Exception is thrown
  
//   Answer: 3
//   If you put setTimeout and setInterval methods inside the try clause and an exception is thrown,
// the catch clause will not catch any of them. This is because the try...catch statement works synchronously, 
// and the function in the above code is executed asynchronously after a certain period of time. 
// Hence, you will see runtime exception without catching the error. 

// To resolve this issue, you have to put the try...catch block inside the function as below,
  
  setTimeout(() => {
    try {
      console.log("try block");
      throw new Error(`An exception is thrown`);
    } catch (err) {
      console.log("Error: ", err);
    }
  }, 1000);
//   You can use .catch() function in promises to avoid these issues with asynchronous code.
  
//   -------------------------------------------------------------------------------------------

// Question 45 :

// How do you verify two strings are anagrams or not?

// An anagram is a word or phrase formed by rearranging all the letters of a different word or phrase exactly once. 
// For example, the anagrams of "eat" word are "tea" and "ate".

// You can split each word into characters, followed by sort action and later join them back. 
// After that you can compare those two words to verify whether those two words are anagrams or not.

function verifyAnagrams(word1, word2) {
  return word1.split("").sort().join("") === word2.split("").sort().join("")
}
console.log(verifyAnagrams("eat", "ate"));

// --------------------------------------------------------------------------------------------
