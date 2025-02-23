// Simulate an asynchronous API call to fetch user data
function fetchUserData(url) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
          { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 25 },
          { id: 3, name: "Mary Johnson", email: "mary.johnson@example.com", age: 22 },
          { id: 4, name: "James Brown", email: "james.brown@example.com", age: 40 }
        ];
        resolve(users);
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  // Process the user data to filter based on age and map to specific properties
  function processUsers(users, minAge) {
    return users
      .filter(user => user.age >= minAge)
      .map(user => ({ name: user.name, email: user.email }));
  }
  
  // Closure function to manage users
  function createUserManager() {
    let usersList = [];
  
    return {
      // Adds a new user
      addUser(user) {
        usersList = [...usersList, user];
      },
      
      // Returns a list of users but hides their emails using closure
      getUsers() {
        return usersList.map(user => {
          const { email, ...rest } = user; // Hides email
          return rest; // Return user without email
        });
      },
  
      // Finds a user by name with optional chaining
      findUserByName(name) {
        const user = usersList.find(user => user.name === name);
        return user ? user : "User not found";
      }
    };
  }
  
  // Demonstrate execution context behavior
  console.log("Before fetchUserData() call");
  
  // Fetch and process user data
  fetchUserData('https://api.example.com/users')
    .then(users => {
      console.log("Fetched users:", users);
  
      const processedUsers = processUsers(users, 30);
      console.log("Processed users (min age 30):", processedUsers);
  
      // Create a user manager
      const userManager = createUserManager();
  
      // Add users to manager
      processedUsers.forEach(user => userManager.addUser(user));
  
      console.log("After adding users to the manager:");
      console.log("Users (with hidden emails):", userManager.getUsers());
      console.log("Find user by name 'John Doe':", userManager.findUserByName('John Doe'));
      console.log("Find user by name 'Nonexistent User':", userManager.findUserByName('Nonexistent User'));
    })
    .catch(error => console.error("Error fetching user data:", error));
  
  console.log("After fetchUserData() call");
  