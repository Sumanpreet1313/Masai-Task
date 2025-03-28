// User Base Class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

// Student Class (inherits from User)
class Student extends User {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }

    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }
}

// Instructor Class (inherits from User)
class Instructor extends User {
    constructor(name, email, instructorId) {
        super(name, email);
        this.instructorId = instructorId;
    }

    assignGrade() {
        console.log(`Instructor ${this.name} assigned a grade.`);
    }
}

// Demonstration
const student = new Student('Alice', 'alice@example.com', 'S123');
const instructor = new Instructor('Bob', 'bob@example.com', 'I456');

student.getDetails();
student.enroll();

instructor.getDetails();
instructor.assignGrade();
