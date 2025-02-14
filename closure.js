function outerFunction() {
    let message = "Hello from the closure!";
    
    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

// Invoke outerFunction and store the returned function in a variable
const storedFunction = outerFunction();

// Call the stored function to demonstrate closure
storedFunction(); // Output: "Hello from the closure!"
