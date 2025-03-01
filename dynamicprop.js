// Factory function to create an inventory item
function createInventoryItem(name, category, price) {
    return {
        name,
        category,
        price,
        describeItem() {
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
        }
    };
}

// Factory function to add a discount to an inventory item
function addItemDiscount(inventoryItem, discountPercent) {
    return {
        ...inventoryItem, // Copy properties from the original item
        discountPercent,
        discountedPrice: inventoryItem.price - (inventoryItem.price * discountPercent / 100),
        applyDiscount() {
            console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
        }
    };
}

// Example usage:
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350
