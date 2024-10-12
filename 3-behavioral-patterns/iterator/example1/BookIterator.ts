import Book from './Book';
import { IIterator } from './interfaces';

// STEP 2: Concrete Iterator

class BookIterator implements IIterator<Book> {
  private index = 0;

  constructor(private books: Book[]) {}

  hasNext(): boolean {
    return this.index < this.books.length;
  }

  next(): Book {
    return this.books[this.index++];
  }
}

export default BookIterator;
