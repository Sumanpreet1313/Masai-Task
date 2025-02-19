function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // Example usage
  const original = { name: "Alice", hobbies: ["reading", "traveling"] };
  const cloned = deepClone(original);
  
  // Modify the cloned object
  cloned.hobbies.push("coding");
  
  // Logging results
  console.log("Original:", original); // { name: "Alice", hobbies: ["reading", "traveling"] }
  console.log("Clone:", cloned);       // { name: "Alice", hobbies: ["reading", "traveling", "coding"] }
  