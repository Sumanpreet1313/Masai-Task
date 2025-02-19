// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.displayInfo = function () {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  }
  
  // Creating a new Person instance
  let person1 = new Person("Alice", 25);
  
  // Using bind() to create a new function with the correct context
  let boundDisplayInfo = person1.displayInfo.bind(person1);
  
  // Calling the bound function
  boundDisplayInfo();
  