// Factory function to create a Book
function Book(title, author) {
    return {
        title,
        author,
        details() {
            console.log(`Title: ${this.title}, Author: ${this.author}`);
        }
    };
}

// Factory function to create a Library
function createLibrary() {
    let books = [];

    return {
        // Add a book to the collection
        addBook(book) {
            books.push(book);
        },
        
        // Remove a book by title
        removeBook(title) {
            books = books.filter(book => book.title !== title);
        },
        
        // List all books
        listBooks() {
            if (books.length === 0) {
                console.log("No books available in the library.");
                return;
            }
            books.forEach(book => book.details());
        }
    };
}

// Example usage
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

console.log("Library Books:");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");

console.log("\nLibrary Books after removing '1984':");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
