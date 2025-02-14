function countCategories(categories) {
    // Step 1: Use reduce() to count occurrences
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    return categoryCounts;
}

// Extra Challenge: Sort categories by count in descending order
function sortedCategoriesByCount(categories) {
    const categoryCounts = countCategories(categories);

    return Object.entries(categoryCounts) // Convert object to array of [key, value]
        .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
        .map(entry => entry[0]); // Extract only category names
}

// Example input
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

// Call the function
const categoryCounts = countCategories(categories);
console.log(categoryCounts); // Output: { electronics: 2, clothing: 2, toys: 3 }

const sortedCategories = sortedCategoriesByCount(categories);
console.log(sortedCategories); // Output: ["toys", "electronics", "clothing"]
