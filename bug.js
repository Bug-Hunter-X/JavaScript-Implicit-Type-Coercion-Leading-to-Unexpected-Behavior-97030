function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential type error
}

console.log(foo(1, 2)); // 3
console.log(foo(1, null)); // null
console.log(foo('1', 2)); // '12' - Unexpected string concatenation