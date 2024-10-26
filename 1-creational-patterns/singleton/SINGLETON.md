# SINGLETON PATTERN

## What is the Singleton pattern?

The Singleton design pattern is a software design pattern that ensures a class has only one instance and provides a global point of access to that instance. This is particularly useful when exactly one object is needed to coordinate actions across the system, like in configurations, logging, or database connections.

### Key Characteristics of Singleton Pattern:

1. **Single Instance**: Only one instance of the class exists.
2. **Global Access Point**: Provides a way to access that instance.
3. **Lazy Initialization**: The instance is created only when it is needed. (optional)
4. **Thread Safety**: In multi-threaded applications, measures may be taken to ensure that multiple threads do not create separate instances.

### When to Use the Singleton Pattern

- When you need to control access to shared resources, such as a configuration object or a connection pool.
- When you want to ensure that only one instance of a class is used throughout the application.
- When the overhead of creating a new instance is high and you want to save resources.

### Example

Here's a simple implementation of the Singleton pattern

```typescript
class Singleton {
  private static instance: Singleton;

  // Private constructor to prevent direct instantiation
  private constructor() {
    console.log('Creating instance of Singleton');
  }

  // Public method to get the instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Example method
  public someBusinessLogic(): void {
    console.log('Executing some business logic');
  }
}

// Usage
const instance1 = Singleton.getInstance();
instance1.someBusinessLogic();

const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true, both are the same instance
```

### Explanation of the above code

1. **Private Static Instance**: `private static instance: Singleton;` holds the single instance of the class.

2. **Private Constructor**: `private constructor()` prevents instantiation from outside the class.

3. **Static Method**: `public static getInstance()` checks if the instance already exists. If not, it creates it.

4. **Example Method**: You can add methods to the Singleton class to perform operations relevant to your application.

### Advantages

- Controlled access to a single instance.
- Reduced namespace pollution.
- It can be extended to support lazy initialization.

### Disadvantages

- Difficult to test because it introduces global state into an application.
- Can lead to resource contention in multi-threaded applications if not handled properly.

### Summary

The Singleton pattern is a powerful way to manage shared resources in your applications. Just remember to use it wisely, overusing singletons can lead to difficulties in testing and maintenance.
