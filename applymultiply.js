function multiplyNumbers(a, b) {
    return Math.multiply.apply(null, [a, b]); // Incorrect: Math.multiply doesn't exist
  }
  
  // Correct implementation
  function multiplyNumbers(a, b) {
    function multiply(x, y) {
      return x * y;
    }
    
    return multiply.apply(null, [a, b]);
  }
  
  // Example usage
  console.log(multiplyNumbers(5, 3)); // Output: 15
  