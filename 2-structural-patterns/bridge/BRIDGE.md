# BRIDGE PATTERN

## What is the Bridge Pattern?

The Bridge design pattern is a structural pattern that aims to separate an abstraction from its implementation, allowing them to evolve independently. This is particularly useful when both the abstraction and the implementation may vary over time.

### Key Concepts of the Bridge Pattern

1. **Abstraction**: This defines the abstraction's interface and maintains a reference to an implementation object.

2. **Refined Abstraction**: This extends the abstraction and can add additional features.

3. **Implementor**: This defines the interface for the implementation classes. It doesn't have to match the abstraction's interface; in fact, the two can be completely different.

4. **Concrete Implementor**: This implements the implementor interface and defines the concrete implementations of the operations.

### When to Use the Bridge Pattern

- When you want to decouple an abstraction from its implementation so that both can vary independently.
- When you want to avoid a proliferation of classes that results from a combination of interfaces and implementations.
- When you need to improve the extensibility of a system by allowing you to change implementation without affecting the client code.

### Example

Here's a simple example where we have shapes that can be drawn in different colors. We’ll use the Bridge Pattern to separate the shape abstraction from the color implementation.

#### Step 1: Define the Implementor Interface

```typescript
interface IColor {
  applyColor(): void;
}
```

#### Step 2: Implement Concrete Implementors

```typescript
class Red implements IColor {
  public applyColor(): void {
    console.log('Applying red color.');
  }
}

class Green implements IColor {
  public applyColor(): void {
    console.log('Applying green color.');
  }
}
```

#### Step 3: Define the Abstraction

```typescript
abstract class Shape {
  protected color: IColor;

  constructor(color: IColor) {
    this.color = color;
  }

  public abstract draw(): void;
}
```

#### Step 4: Implement Refined Abstractions

```typescript
class Circle extends Shape {
  public draw(): void {
    console.log('Drawing a circle.');
    this.color.applyColor();
  }
}

class Square extends Shape {
  public draw(): void {
    console.log('Drawing a square.');
    this.color.applyColor();
  }
}
```

#### Step 5: Using the Bridge Pattern

```typescript
function clientCode() {
  const red: IColor = new Red();
  const green: IColor = new Green();

  const circle: Shape = new Circle(red);
  circle.draw(); // Drawing a circle. Applying red color.

  const square: Shape = new Square(green);
  square.draw(); // Drawing a square. Applying green color.
}

clientCode();
```

### Explanation of the above code

1. **Implementor Interface**: The `IColor` interface defines the `applyColor` method that all color implementations must implement.
2. **Concrete Implementors**: `Red` and `Green` classes provide concrete implementations of the `IColor` interface.
3. **Abstraction**: The `Shape` abstract class defines the high-level operations for shapes and holds a reference to a `Color` object.
4. **Refined Abstractions**: `Circle` and `Square` extend `Shape` and implement the `draw` method, which utilizes the `IColor` object.
5. **Client Code**: Demonstrates how to create shapes with different colors, showing how the bridge pattern allows flexibility in defining shape and color combinations.

### Benefits of Using Bridge

- **Decoupling**: The abstraction can vary independently from its implementation, making the system more flexible.
- **Extensibility**: New implementations and abstractions can be added without modifying existing code, promoting scalability.
- **Reduced Class Explosion**: Avoids creating a multitude of subclasses for every combination of abstraction and implementation.

### Summary

The Bridge Pattern is a powerful design pattern that enhances the flexibility and scalability of systems by separating abstractions from their implementations. It allows for independent variation and promotes cleaner, more maintainable code. This pattern is particularly useful in situations where you have multiple dimensions of variability, such as different types of objects and behaviors associated with them.
