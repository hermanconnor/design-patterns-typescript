# Open/Closed Principle (OCP)

The **Open/Closed Principle (OCP)** states that software entities (like classes, modules, and functions) should be open for extension but closed for modification. This means that you should be able to add new functionality to a class without changing its existing code. This principle helps to reduce the risk of introducing bugs when enhancing functionality.

### Key Concept

1. **Open for Extension**: You should be able to extend a class or module to introduce new behavior. This can often be achieved by using inheritance, interfaces, or composition.
2. **Closed for Modification**: Existing code should not be modified. Instead of changing existing classes or functions, you should create new ones that add the desired functionality.

### Example

Here's a simple example of a shape area calculator.

#### Violating the OCP

In this example, we have a `ShapeAreaCalculator` class that can only calculate the area of a `Circle`. If we want to add support for other shapes, we must modify the existing class.

```typescript
class Circle {
  constructor(public radius: number) {}
}

class ShapeAreaCalculator {
  calculateArea(shape: Circle): number {
    return Math.PI * shape.radius ** 2;
  }
}

// Usage
const circle = new Circle(5);
const calculator = new ShapeAreaCalculator();
console.log(calculator.calculateArea(circle)); // Outputs: 78.53981633974483
```

If we want to add support for rectangles, we now have to modify the `ShapeAreaCalculator` class.

```typescript
class Rectangle {
  constructor(public width: number, public height: number) {}
}

class ShapeAreaCalculator {
  calculateArea(shape: Circle | Rectangle): number {
    if (shape instanceof Circle) {
      return Math.PI * shape.radius ** 2;
    } else if (shape instanceof Rectangle) {
      return shape.width * shape.height;
    }
    throw new Error('Shape not supported');
  }
}
```

This approach violates the Open/Closed Principle because each time we want to add a new shape, we have to change the `ShapeAreaCalculator` class.

### Following the OCP

To adhere to the Open/Closed Principle, we can use polymorphism and interfaces to allow new shapes to be added without modifying existing code.

#### Using Interfaces

```typescript
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class ShapeAreaCalculator {
  calculateArea(shape: Shape): number {
    return shape.area();
  }
}

// Usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const calculator = new ShapeAreaCalculator();

console.log(calculator.calculateArea(circle)); // Outputs: 78.53981633974483
console.log(calculator.calculateArea(rectangle)); // Outputs: 24
```

### Benefits of Following the OCP

1. **Reduced Risk of Bugs**: By not modifying existing code, you minimize the chance of introducing bugs into stable, working functionality.
2. **Flexibility**: New features can be added easily by creating new classes without touching existing classes.
3. **Better Code Organization**: Encourages separation of concerns, leading to cleaner and more maintainable code.

By adhering to the Open/Closed Principle, you make your codebase more robust and easier to extend, which is especially valuable as applications grow in complexity.
