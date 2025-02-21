console.log("Starting...");

let count = 0;

// Start logging "Loading..." every 1 second
const loadingInterval = setInterval(() => {
  console.log("Loading...");
  count++;

  // Stop after 5 seconds
  if (count === 5) {
    clearInterval(loadingInterval);
    console.log("Loaded successfully!");
  }
}, 1000);
