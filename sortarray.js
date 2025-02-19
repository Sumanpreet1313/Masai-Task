function sortNames(namesArray) {
    return namesArray.sort((a, b) => a.localeCompare(b));
  }
  
  // Example usage
  const names = ["Charlie", "Alice", "Bob"];
  const sortedNames = sortNames(names);
  
  console.log(sortedNames); // Output: ["Alice", "Bob", "Charlie"]
  