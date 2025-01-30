// Create an array with five tasks
let tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

// Remove the first task from the list
tasks = tasks.slice(1);

// Add two new high-priority tasks to the beginning of the list
tasks = ["High Priority Task 1", "High Priority Task 2"].concat(tasks);

// Replace the last task in the list with a new task
tasks[tasks.length - 1] = "New Task 6";

// Log the updated task list
console.log(tasks);
