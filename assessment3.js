// Create an object representing a book with properties for title, author, and the method getDetails which logs details about the book.

// let book = {
//     title: "The Great Gatsby",
//     author: 'F. Scott Fitzgerald',
//     getDetails: function() {
//       console.log(title + " written by " + author);
//     }
//   };
//   book.getDetail();
  
let book = {
  title: "The Great Gatsby",
  author: 'F. Scott Fitzgerald',
  getDetails: function() { return `${this.title}  written by  ${this.author}`},
};

console.log(book.getDetails());
  