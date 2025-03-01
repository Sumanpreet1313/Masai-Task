import { books } from "./books.js";

const summaries = books.map(book => book.getSummary());
console.log(summaries);