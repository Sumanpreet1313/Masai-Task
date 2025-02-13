function factorial(n) {
    // Input validation
    if (typeof n !== "number" || !Number.isInteger(n)) {
      console.log("Invalid input: Input must be a non-negative integer.");
      return;
    }
  
    if (n < 0) {
      console.log("Invalid input: Factorial is not defined for negative numbers.");
      return;
    }
  
    // Base case: factorial(0) = 1
    if (n === 0) return 1;
  
    // Recursive case
    return n * factorial(n - 1);
  }
  
  // Test Cases
  console.log(factorial(5));   // Output: 120
  console.log(factorial(0));   // Output: 1
  console.log(factorial(-3));  // Output: Invalid input
  console.log(factorial("5")); // Output: Invalid input
  console.log(factorial(1.5)); // Output: Invalid input
  