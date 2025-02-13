const userProfile = {
    name: "Alice",
    age: 28,
  
    details() {
      return `${this.name} is ${this.age} years old.`;
    },
  
    updateAge(newAge) {
      if (newAge <= 0 || typeof newAge !== "number") {
        console.log("Error: Invalid age.");
        return;
      }
  
      this.age = newAge;
      console.log(this.details()); // Correctly invoking the method
    }
  };
  
  // Test Cases
  userProfile.updateAge(30);  
  // Output: "Alice is 30 years old."
  
  console.log(userProfile.details());  
  // Output: "Alice is 30 years old."
  
  userProfile.updateAge(-5);  
  // Output: "Error: Invalid age."
  