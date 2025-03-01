


function createBook(title, author) {
    return {
      title,
      author,
      printInfo() {  // Use a regular function instead of an arrow function
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }
  
  // Example usage
  const book = createBook("1984", "George Orwell");
  book.printInfo();
  // Output: Book: 1984, Author: George Orwell
  