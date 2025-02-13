const generateMessage = ({ role, active }) => 
    role === "admin" ? (active ? "Admin Access Granted!" : "Admin Access Revoked") :
    role === "user" ? (active ? "User Access Granted!" : "User Access Revoked") :
    "Access Denied";
  
  // Example test cases
  let user1 = { name: "Alice", role: "admin", active: false };
  console.log(generateMessage(user1)); // Output: "Admin Access Revoked"
  
  let user2 = { name: "Bob", role: "user", active: true };
  console.log(generateMessage(user2)); // Output: "User Access Granted!"
  
  let user3 = { name: "Charlie", role: "guest", active: true };
  console.log(generateMessage(user3)); // Output: "Access Denied"
  