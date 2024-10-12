import Book from './Book';
import Library from './Library';

const library = new Library();

library.addBook(new Book('1984', 'George Orwell'));
library.addBook(new Book('To Kill a Mockingbird', 'Harper Lee'));
library.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald'));

const iterator = library.createIterator();

while (iterator.hasNext()) {
  const book = iterator.next();

  console.log(`${book.title} by ${book.author}`);
}
