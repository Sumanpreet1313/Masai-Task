// Constructor function for Animal
function Animal() {
    this.type = "Animal";
}

// Adding a method to Animal prototype
Animal.prototype.sound = function () {
    console.log("Animal sound");
};

// Constructor function for Dog
function Dog() {
    Animal.call(this); // Call the Animal constructor
}

// Inheriting from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Overriding the sound method in Dog prototype
Dog.prototype.sound = function () {
    console.log("Bark");
};

// Creating an instance of Dog
const myDog = new Dog();

// Calling the sound method
myDog.sound(); // Output: "Bark"
