// Constructor function for Product
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// Method to display product details
Product.prototype.displayInfo = function () {
    console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

// Constructor function for Electronics
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.model = model;
}

// Inheriting from Product
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Methods specific to Electronics
Electronics.prototype.powerOn = function () {
    console.log(`${this.brand} ${this.model} is now ON.`);
};

Electronics.prototype.powerOff = function () {
    console.log(`${this.brand} ${this.model} is now OFF.`);
};

// Constructor function for Clothing
function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
}

// Inheriting from Product
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Method specific to Clothing
Clothing.prototype.wash = function () {
    console.log(`Washing ${this.name} made of ${this.material}.`);
};

// Constructor function for Books
function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
}

// Inheriting from Product
Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

// Method specific to Books
Book.prototype.read = function () {
    console.log(`Reading "${this.name}" by ${this.author}.`);
};

// Demonstration
const laptop = new Electronics("Laptop", 1000, 5, "Dell", "XPS 15");
laptop.displayInfo();
laptop.powerOn();

const tshirt = new Clothing("T-Shirt", 20, 50, "L", "Cotton");
tshirt.displayInfo();
tshirt.wash();

const novel = new Book("The Great Gatsby", 15, 10, "F. Scott Fitzgerald", "Fiction");
novel.displayInfo();
novel.read();