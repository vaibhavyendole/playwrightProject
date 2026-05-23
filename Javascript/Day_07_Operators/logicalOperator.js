// Logical operators in JavaScript

// && (AND): returns the second operand if the first is truthy, otherwise returns the first falsy value.
// It is true when both operands are truthy.
const andResult = true && false; // false

// || (OR): returns the first truthy operand, or the last operand if both are falsy.
// It is true when at least one operand is truthy.
const orResult = true || false; // true

// ! (NOT): negates the truthiness of a value.
const notResult = !true; // false

// Example of short-circuit behavior
const first = null;
const fallback = first || 'default'; // 'default'
const skip = false && 'ignored'; // false

console.log({ andResult, orResult, notResult, fallback, skip });
