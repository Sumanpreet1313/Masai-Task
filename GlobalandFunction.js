// Step 1: Declare a global variable
let age = 25;

// Step 2: Function to display the current age
function displayAge() {
  console.log("Current Age:", age);
}

// Step 3: Function to change the global age variable
function changeAge(newAge) {
  age = newAge; // Updating the global variable
  console.log("Updated Age:", age);
}

// Step 4: Call functions to observe changes
displayAge();    // Output: Current Age: 25
changeAge(30);   // Output: Updated Age: 30
displayAge();    // Output: Current Age: 30
