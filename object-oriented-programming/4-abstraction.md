# Abstraction

Abstraction focuses on hiding the complex implementation details of a system and exposing only the necessary features to the user. This allows users to interact with the system without needing to understand its internal workings, thereby simplifying complexity.

### Key Features of Abstraction

1. **Simplification**: Abstraction reduces complexity by allowing users to work with a simplified model of an object or system.

2. **Hiding Implementation Details**: It encapsulates the functionality while hiding the underlying complexity, which helps in managing large systems.

3. **Interfaces and Abstract Classes**: Abstraction is often achieved through the use of interfaces and abstract classes, which define a contract for subclasses to implement.

### Example

#### Using Abstract Classes

Abstraction can be achieved through abstract classes:

```typescript
// Abstract class
abstract class Shape {
  // Abstract method (does not have a body)
  abstract area(): number;

  // Concrete method
  public describe(): void {
    console.log('This is a shape.');
  }
}

// Subclass
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  public area(): number {
    return this.width * this.height;
  }
}

// Another subclass
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Using the classes
const shapes: Shape[] = [new Rectangle(10, 5), new Circle(7)];

shapes.forEach((shape) => {
  shape.describe(); // Output: This is a shape.
  console.log(`Area: ${shape.area()}`);
});
```

### Explanation

1. **Abstract Class (Shape)**: The `Shape` class is declared as abstract, meaning it cannot be instantiated directly. It defines an abstract method `area()` that must be implemented by any subclass.

2. **Concrete Methods**: The `describe()` method is a concrete method that can be used by all subclasses, demonstrating that abstract classes can contain both abstract and concrete methods.

3. **Subclasses (Rectangle and Circle)**: Both subclasses implement the `area()` method, providing their specific calculations.

4. **Using Abstraction**: An array of `Shape` objects is created, and each shape's `describe()` and `area()` methods are called. The user interacts with a unified interface (`Shape`), without needing to know the specific implementation details of each shape.

#### Using Interfaces

Abstraction can also be achieved through interfaces

```typescript
// Interface
interface Vehicle {
  start(): void;
  stop(): void;
}

// Class implementing the interface
class Car implements Vehicle {
  public start(): void {
    console.log('Car is starting.');
  }

  public stop(): void {
    console.log('Car is stopping.');
  }
}

class Bike implements Vehicle {
  public start(): void {
    console.log('Bike is starting.');
  }

  public stop(): void {
    console.log('Bike is stopping.');
  }
}

// Using the interface
const vehicles: Vehicle[] = [new Car(), new Bike()];

vehicles.forEach((vehicle) => {
  vehicle.start(); // Calls start method for Car and Bike
});
```

### Explanation

1. **Interface (Vehicle)**: Defines a contract that requires implementing classes to provide `start()` and `stop()` methods.

2. **Classes (Car and Bike)**: Both classes implement the `Vehicle` interface, providing their specific implementations of the methods.

3. **Using Abstraction**: The `vehicles` array allows for a uniform way to interact with different types of vehicles, again emphasizing that the user doesn’t need to know the specific details of each class.

### Conclusion

Abstraction allows you to simplify complex systems by providing a clear interface while hiding the underlying details. This makes code more maintainable, reusable, and easier to understand.
