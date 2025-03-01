// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to Person prototype
Person.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Constructor function for Employee
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call the Person constructor
    this.jobTitle = jobTitle;
}

// Inheriting from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding a method to Employee prototype
Employee.prototype.work = function () {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Creating an instance of Person
const person1 = new Person("Alice", 30);
person1.introduce(); // Output: "Hi, my name is Alice and I am 30 years old."

// Creating an instance of Employee
const employee1 = new Employee("Bob", 25, "Software Engineer");
employee1.introduce(); // Output: "Hi, my name is Bob and I am 25 years old."
employee1.work(); // Output: "Bob is working as a Software Engineer."
