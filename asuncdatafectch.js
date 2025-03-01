// Function that simulates data fetching with a 50% chance of failure
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Network error: Unable to fetch data.");
            }
        }, 1000); // Simulating network delay
    });
}

// Async function to handle data fetching
async function fetchDataHandler() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Call the function to observe success and failure cases
fetchDataHandler();
