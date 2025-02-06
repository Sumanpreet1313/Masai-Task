let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

let output = "";
for (let key in book) {
    output += `${key}: ${book[key]} `;
}
console.log(output.trim());
