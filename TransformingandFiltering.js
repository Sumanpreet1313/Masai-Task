function processProducts(products) {
    // Extract product names using map()
    const productNames = products.map(product => product.name);

    // Iterate over products and log price comparison messages
    products.forEach(product => {
        const message = product.price > 50 
            ? `${product.name} is above $50` 
            : `${product.name} is below $50`;
        console.log(message);
    });

    return productNames; // Returning the array of product names
}

// Example input
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];

// Call the function
const names = processProducts(products);
console.log(names); // Output: ["Laptop", "Mouse"]
