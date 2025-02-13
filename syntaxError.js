const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      // Ensure price exists and is a valid number
      if (!item || typeof item.price !== 'number' || isNaN(item.price)) {
        console.log(`Error: Invalid price for "${item?.name || 'unknown item'}".`);
        return;
      }
  
      this.items.push(item);
      this.total += item.price;
      console.log(`Success: Added "${item.name}" for $${item.price.toFixed(2)}`);
    },
  
    getTotal() {
      return `Total: $${this.total.toFixed(2)}`;
    }
  };
  
  // Test Cases
  checkout.addItem({ name: "Coffee Maker", price: "99.95" }); 
  // Output: Error: Invalid price for "Coffee Maker".
  
  checkout.addItem({ name: "Milk", price: 3.50 }); 
  // Output: Success: Added "Milk" for $3.50
  
  checkout.addItem({ name: "Laptop", price: 799.99 }); 
  // Output: Success: Added "Laptop" for $799.99
  
  console.log(checkout.getTotal()); 
  // Output: Total: $803.49
  