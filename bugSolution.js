function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  // Explicit type checking and conversion
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return null; // Handle cases where conversion fails
  }

  return numA + numB; // Guaranteed numerical addition
}

console.log(foo(1, 2)); // 3
console.log(foo(1, null)); // null
console.log(foo('1', 2)); // 3
console.log(foo('1.5', '2.5')); // 4