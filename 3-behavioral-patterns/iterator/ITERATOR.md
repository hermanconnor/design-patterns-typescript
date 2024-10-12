# ITERATOR PATTERN

## What is the Iterator design pattern?

The Iterator pattern is a behavioral design pattern that provides a way to access elements of a collection (like arrays or lists) without exposing the underlying representation. It allows sequential access to the elements of a collection without exposing its structure.

### Key Concepts of the Iterator Pattern

1. **Iterator**: An object that encapsulates the iteration logic over a collection. It keeps track of the current position in the collection.

2. **Aggregate (Collection)**: The collection that holds the elements to be iterated over. It provides a method to create an iterator.

3. **Client**: The user of the iterator who wants to traverse the collection.

### Benefits of the Iterator Pattern

- **Decoupling**: The client code doesn’t need to know the details of the collection’s structure.
- **Flexibility**: You can create multiple iterators for different purposes.
- **Multiple Iterations**: Allows concurrent iterations over the same collection without interference.

### When to Use the Iterator Pattern

- When you want to provide a uniform way to access the elements of a collection.
- When the internal representation of the collection might change, but the client code should remain unaffected.

### Implementation in TypeScript

Let's implement a simple example of the Iterator pattern using TypeScript:

1. **Define the Iterator Interface**: This interface will declare methods for iteration.

2. **Define the Concrete Iterator**: This class implements the Iterator interface and provides the logic for iterating over the collection.

3. **Define the Aggregate Interface**: This will declare the method for creating an iterator.

4. **Define the Concrete Aggregate**: This class will hold the collection and implement the method to return an iterator.

Here’s how you can implement it:

```typescript
// Step 1: Iterator Interface
interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Step 2: Concrete Iterator
class ArrayIterator<T> implements IIterator<T> {
  private index = 0;

  constructor(private collection: T[]) {}

  hasNext(): boolean {
    return this.index < this.collection.length;
  }

  next(): T {
    return this.collection[this.index++];
  }
}

// Step 3: Aggregate Interface
interface Aggregate<T> {
  createIterator(): IIterator<T>;
}

// Step 4: Concrete Aggregate
class ArrayAggregate<T> implements Aggregate<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  createIterator(): IIterator<T> {
    return new ArrayIterator(this.items);
  }
}

// Example Usage
const aggregate = new ArrayAggregate<number>();
aggregate.add(1);
aggregate.add(2);
aggregate.add(3);

const iterator = aggregate.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next()); // Output: 1, 2, 3
}
```

### Explanation of the Code

- **Iterator Interface**: This defines `hasNext()` to check if there are more elements to iterate and `next()` to retrieve the next element.

- **ArrayIterator**: Implements the Iterator interface, keeping track of the current index in the collection.

- **Aggregate Interface**: Defines a method `createIterator()` for creating iterators.

- **ArrayAggregate**: Implements the Aggregate interface, storing a collection of items and allowing adding items and creating an iterator.

- **Example Usage**: We create an instance of `ArrayAggregate`, add items, and use the iterator to traverse and print them.

### Summary

The Iterator pattern allows you to traverse a collection without exposing its internal structure. You can easily adapt this pattern for different types of collections, such as linked lists or sets, by creating new concrete iterators and aggregates.
