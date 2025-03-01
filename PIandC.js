// Constructor function for Car
function Car(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
    this.isAvailable = true;
}

// Constructor function for Customer
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Method to rent a car
Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
};

// Method to return a car
Customer.prototype.returnCar = function (car) {
    const index = this.rentedCars.indexOf(car);
    if (index > -1) {
        this.rentedCars.splice(index, 1);
        console.log(`${this.name} is returning the ${car.make} ${car.model}...`);
        setTimeout(() => {
            car.isAvailable = true;
            console.log(`The ${car.make} ${car.model} is now available for rent.`);
        }, 2000);
    }
};

// Constructor function for PremiumCustomer
function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}

// Inheriting from Customer
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Function to calculate rental price
function calculateRentalPrice(car, days, customer) {
    let basePrice = 50;
    if (car.type === "SUV") basePrice = 70;
    if (car.type === "Sedan") basePrice = 60;

    let total = basePrice * days;
    if (customer instanceof PremiumCustomer) {
        total *= (1 - customer.discountRate / 100);
    }
    return total;
}

// Function for Maintenance
function Maintenance(car, delay) {
    console.log(`Maintenance started for ${car.make} ${car.model}.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`Maintenance completed for ${car.make} ${car.model}.`);
    }, delay);
}

// Demonstration
const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
const car2 = new Car("Honda", "CR-V", 2021, "SUV");
const car3 = new Car("Ford", "Focus", 2019, "Sedan");

const customer1 = new Customer("Alice");
const premiumCustomer1 = new PremiumCustomer("Bob", 10);

customer1.rentCar(car1);
premiumCustomer1.rentCar(car2);

console.log(`Rental price for Bob: $${calculateRentalPrice(car2, 5, premiumCustomer1)}`);

customer1.returnCar(car1);
Maintenance(car3, 3000);