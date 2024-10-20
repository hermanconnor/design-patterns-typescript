# STRATEGY PATTERN

## What is the Strategy design pattern?

The Strategy design pattern is a behavioral design pattern that enables selecting an algorithm's behavior at runtime. This pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from the clients that use it.

### Key Concepts

1. **Context**: The class that uses a strategy.
2. **Strategy**: An interface that defines a method for executing a specific algorithm.
3. **Concrete Strategies**: Implementations of the strategy interface that define specific algorithms.

### Benefits

- **Separation of Concerns**: The strategy pattern separates the algorithm from the client that uses it, promoting cleaner code.
- **Flexibility**: You can easily switch algorithms at runtime without modifying the context.
- **Encapsulation**: Algorithms are encapsulated within their classes, making them easier to manage and extend.

### When to Use

- When you have multiple algorithms for a specific task, and you want to switch between them at runtime.
- When you want to avoid conditional statements to choose different algorithms.

### Implementation Steps

1. Define a strategy interface.
2. Create concrete strategy classes implementing the strategy interface.
3. Create a context class that holds a reference to a strategy and delegates calls to it.

### Example

Here is a simple example:

1. **Define the Strategy Interface**:

```typescript
interface SortStrategy {
  sort(data: number[]): number[];
}
```

2. **Implement Concrete Strategies**:

```typescript
class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    const arr = [...data]; // create a copy of the array
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        }
      }
    }
    return arr;
  }
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) return data;
    const pivot = data[data.length - 1];
    const left = data.slice(0, -1).filter((x) => x <= pivot);
    const right = data.slice(0, -1).filter((x) => x > pivot);
    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}
```

3. **Create the Context Class**:

```typescript
class Sorter {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}
```

4. **Using the Strategy Pattern**:

```typescript
const data = [5, 3, 8, 4, 2];

const bubbleSorter = new Sorter(new BubbleSort());
console.log('Bubble Sort:', bubbleSorter.sort(data));

const quickSorter = new Sorter(new QuickSort());
console.log('Quick Sort:', quickSorter.sort(data));
```

### Summary

The Strategy design pattern is a powerful way to manage algorithms and behaviors within your application. By using interfaces and concrete implementations, you can easily switch out strategies, enhancing flexibility and maintainability.
