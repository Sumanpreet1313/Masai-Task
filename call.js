function personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  
  let person = {
    name: "John",
    age: 30
  };
  
  // Using call() to invoke personInfo with person as this context
  personInfo.call(person);
  