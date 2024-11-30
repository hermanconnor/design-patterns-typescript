# Abstract Base Class

Abstract Base Classes (ABCs) are a core concept in object-oriented programming that provide a way to define a common interface for a group of related classes. ABCs cannot be instantiated directly and are typically used to outline a set of methods that must be implemented by subclasses. This promotes code reuse and establishes a clear contract for subclasses.

### Key Concepts of Abstract Base Classes

1. **Definition**: An ABC is a class that cannot be instantiated and is meant to be subclassed. It often contains one or more abstract methods, which are methods that have no implementation in the ABC itself.

2. **Abstract Methods**: These are methods declared in the ABC that must be implemented by any concrete subclass. They define a common interface but do not provide any functionality.

3. **Concrete Methods**: In addition to abstract methods, ABCs can also contain concrete methods—those with full implementations that can be shared among subclasses.

4. **Polymorphism**: ABCs enable polymorphism by allowing a function to operate on any subclass of the ABC, treating them as instances of the ABC type.

### Example

Here's an example illustrating the concept of Abstract Base Classes

```typescript
// Abstract Base Class
abstract class Shape {
  // Abstract method
  abstract area(): number;

  // Concrete method
  public describe(): void {
    console.log('This is a shape.');
  }
}

// Subclass: Rectangle
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  // Implementing the abstract method
  public area(): number {
    return this.width * this.height;
  }
}

// Subclass: Circle
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // Implementing the abstract method
  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Function demonstrating polymorphism
function printArea(shape: Shape): void {
  shape.describe(); // Calls the concrete method from the abstract class
  console.log(`Area: ${shape.area()}`);
}

// Using the classes
const myRectangle = new Rectangle(10, 5);
const myCircle = new Circle(7);

printArea(myRectangle); // Output: This is a shape. Area: 50
printArea(myCircle); // Output: This is a shape. Area: 153.93804002589985
```

### Explanation of the Example

1. **Abstract Base Class (Shape)**:

   - The `Shape` class is declared as abstract. It contains one abstract method `area()` and one concrete method `describe()`.
   - The `area()` method has no implementation and must be implemented by any subclass.

2. **Concrete Subclasses (Rectangle and Circle)**:

   - Both `Rectangle` and `Circle` classes extend the `Shape` class.
   - Each subclass provides its specific implementation of the `area()` method, adhering to the contract defined by the ABC.

3. **Polymorphic Behavior**:
   - The function `printArea()` accepts a parameter of type `Shape`. It can work with any object that is an instance of a subclass of `Shape`, demonstrating polymorphism.
   - It calls the `describe()` method (from the ABC) and the `area()` method (which is implemented differently in each subclass).

### Considerations

- **Cannot Instantiate**: You cannot create an instance of an abstract class directly. Attempting to do so will result in a compilation error.
- **Partial Implementation**: ABCs can contain both abstract methods (to be implemented by subclasses) and concrete methods (which provide shared functionality).
- **Use of Interfaces**: In TypeScript, you can also achieve similar behavior using interfaces. However, ABCs allow you to provide shared code along with enforcing method implementation.

### Conclusion

Abstract Base Classes (ABCs) are a powerful tool in object-oriented design, allowing you to define a common interface and shared behavior for a group of related classes. They help ensure consistency and enforce implementation in subclasses, promoting better code organization and reusability.
