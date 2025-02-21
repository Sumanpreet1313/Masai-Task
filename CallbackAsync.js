function registerUser(username, callback) {
    setTimeout(() => {
      if (!username) {
        return callback("Registration failed: No username provided");
      }
      console.log(`User "${username}" registered successfully`);
      callback(null, username);
    }, 1000);
  }
  
  function sendVerification(username, callback) {
    setTimeout(() => {
      if (username !== "validUser") {
        return callback(`Verification failed: User "${username}" is invalid`);
      }
      console.log(`Verification email sent to "${username}"`);
      callback(null, username);
    }, 1000);
  }
  
  function loginUser(username, callback) {
    setTimeout(() => {
      if (username !== "validUser") {
        return callback(`Login failed: User "${username}" not found`);
      }
      console.log(`User "${username}" logged in successfully`);
      callback(null, username);
    }, 1000);
  }
  
  function displayWelcomeMessage(username, callback) {
    setTimeout(() => {
      console.log(`Welcome, ${username}! Enjoy your stay.`);
      callback(null);
    }, 1000);
  }
  
  // Execute workflow with callbacks and error handling
  registerUser("validUser", (err, username) => {
    if (err) return console.error(err);
  
    sendVerification(username, (err, verifiedUser) => {
      if (err) return console.error(err);
  
      loginUser(verifiedUser, (err, loggedInUser) => {
        if (err) return console.error(err);
  
        displayWelcomeMessage(loggedInUser, (err) => {
          if (err) return console.error(err);
          console.log("Workflow completed successfully!");
        });
      });
    });
  });
  