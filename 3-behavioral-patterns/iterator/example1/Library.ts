import Book from './Book';
import BookIterator from './BookIterator';
import { IIterator } from './interfaces';

// STEP 3: Aggregate Interface
interface Aggregate<T> {
  createIterator(): IIterator<T>;
}

// STEP 4: Concrete Aggregate (Library)

class Library implements Aggregate<Book> {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  createIterator(): IIterator<Book> {
    return new BookIterator(this.books);
  }
}

export default Library;
