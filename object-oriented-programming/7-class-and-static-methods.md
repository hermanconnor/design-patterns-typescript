# Class and Static Methods

Class methods and static methods serve different purposes and are used in distinct contexts.

### Class Methods

Class methods (also known as instance methods) are functions defined inside a class that operate on instances of that class. They can access instance properties and other instance methods, allowing for the manipulation of the object's state.

#### Characteristics of Class Methods:

1. **Instance Context**: Class methods require an instance of the class to be called. They can access the instance properties using the `this` keyword.

2. **Access to Instance Data**: They can read and modify the instance properties of the class.

3. **Overriding**: Class methods can be overridden in subclasses, allowing for polymorphic behavior.

#### Example of Class Methods

```typescript
class Dog {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public bark(): void {
    console.log(`${this.name} says Woof!`);
  }
}

// Creating an instance of Dog
const myDog = new Dog('Buddy');
myDog.bark(); // Output: Buddy says Woof!
```

### Static Methods

Static methods are functions defined on the class itself, rather than on instances of the class. They cannot access instance properties or instance methods directly, as they are called on the class itself rather than on an object instance.

#### Characteristics of Static Methods:

1. **Class Context**: Static methods are called on the class itself rather than on an instance. They do not require an instance to be invoked.

2. **No Access to Instance Data**: They cannot access or modify instance properties (`this` refers to the class, not an instance).

3. **Utility Functions**: Static methods are often used for utility functions or factory methods that do not depend on the instance state.

#### Example of Static Methods

```typescript
class MathUtil {
  // Static method to add two numbers
  public static add(a: number, b: number): number {
    return a + b;
  }

  // Static method to multiply two numbers
  public static multiply(a: number, b: number): number {
    return a * b;
  }
}

// Calling static methods without creating an instance
console.log(MathUtil.add(5, 10)); // Output: 15
console.log(MathUtil.multiply(5, 10)); // Output: 50
```

### Comparison: Class Methods vs. Static Methods

| Feature                 | Class Methods                   | Static Methods                           |
| ----------------------- | ------------------------------- | ---------------------------------------- |
| Invocation              | Called on an instance           | Called on the class itself               |
| Access to Instance Data | Can access instance properties  | Cannot access instance properties        |
| Use Case                | Manipulating instance state     | Utility functions, factory methods       |
| Overriding              | Can be overridden in subclasses | Cannot be overridden (but can be hidden) |

### Use Cases

- **Class Methods**:

  - When you need to perform operations that depend on the state of an instance.
  - When you want to encapsulate behavior that is specific to an object.

- **Static Methods**:
  - When you need utility functions that don't rely on object state.
  - When you want to provide factory methods that create instances of the class.

### Conclusion

Class methods operate on instances and can access instance properties, while static methods belong to the class itself and do not have access to instance-specific data. Understanding when to use each type will help you design more effective and maintainable object-oriented systems.
