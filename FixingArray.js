const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook(book) {
      // Validate that all properties are provided
      if (typeof book !== "object" || !book.title || !book.author || !book.year) {
        console.log("Error: Book information is incomplete or invalid.");
        return;
      }
  
      // Check if a book with the same title already exists
      if (this.books.some(b => b.title === book.title)) {
        console.log(`Error: A book with the title "${book.title}" already exists.`);
        return;
      }
  
      this.books.push(book);
      console.log(`Success: "${book.title}" has been added.`);
    },
  
    findBookByTitle(title) {
      const book = this.books.find(book => book.title === title);
      return book ? book : "Book not found.";
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
  
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Success: "${removedBook.title}" has been removed.`);
      } else {
        console.log("Error: Book not found.");
      }
    }
  };
  
  // Test Cases
  library.addBook({ author: "George Orwell", year: 1949 }); 
  // Output: Error: Book information is incomplete or invalid.
  
  console.log(library.books.length); 
  // Output: 1 (unchanged because the book was not added)
  
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); 
  // Output: Success: "1984" has been added.
  
  console.log(library.books.length); 
  // Output: 2 (new book added successfully)
  
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); 
  // Output: Error: A book with the title "1984" already exists.
  
  console.log(library.findBookByTitle("1984")); 
  // Output: { title: "1984", author: "George Orwell", year: 1949 }
  
  library.removeBook("The Hobbit"); 
  // Output: Success: "The Hobbit" has been removed.
  
  console.log(library.books.length); 
  // Output: 1 (book removed)
  