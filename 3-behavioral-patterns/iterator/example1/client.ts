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

/**
In this example, we have a `Book` class representing individual books, a `Library` class to hold the collection of books, and an `Iterator` for traversing through the books. This will allow clients to traverse the collection of books without needing to know how they're stored.
 
Explanation of the Example
  1. Book Class: This class has properties `title` and `author` representing a book.

  2. Iterator Interface: Defines the `hasNext()` and `next()` methods for iterating through the collection.

  3. BookIterator Class: Implements the `Iterator` interface to provide logic for iterating over the `Book` collection. It keeps track of the current index.

  4. Aggregate Interface: Declares a method `createIterator()` to create an iterator for the collection.

  5. Library Class: Implements the `Aggregate` interface. It holds an array of `Book` instances and provides a method to add books and create an iterator.

  6. Example Usage: We create an instance of `Library`, add some books, and use the iterator to traverse and print the title and author of each book.
 */
