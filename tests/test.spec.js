// test.js

console.log("This is a test file for Playwright.");

function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(`The result of adding 2 and 3 is: ${result}`);

const x = { one: 1, two: 2, three: 3 };
const y = Object.create(x);
const something = "something";
y.something = something;

console.log(x.one);
console.log(y.something);
