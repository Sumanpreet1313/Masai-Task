function processStudents(students) {
    return students
        .filter(student => student.marks > 60) // Step 1: Filter students with marks > 60
        .sort((a, b) => b.marks - a.marks) // Step 2: Sort in descending order of marks
        .map(student => student.name); // Step 3: Extract names
}

// Example input
const students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
];

// Call the function
const result = processStudents(students);
console.log(result); // Output: ["Charlie", "Bob"]
