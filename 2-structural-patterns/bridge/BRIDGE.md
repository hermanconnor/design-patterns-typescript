# BRIDGE PATTERN

## What is the Bridge Pattern?

The Bridge design pattern is a structural pattern that aims to separate an abstraction from its implementation, allowing them to evolve independently. This is particularly useful when both the abstraction and the implementation may vary over time.

### Key Concepts of the Bridge Pattern

1. **Abstraction**: This defines the abstraction's interface and maintains a reference to an implementation object.

2. **Refined Abstraction**: This extends the abstraction and can add additional features.

3. **Implementor**: This defines the interface for the implementation classes. It doesn't have to match the abstraction's interface; in fact, the two can be completely different.

4. **Concrete Implementor**: This implements the implementor interface and defines the concrete implementations of the operations.

### Benefits of the Bridge Pattern

- **Decoupling**: It decouples the abstraction from its implementation, allowing both to vary independently.
- **Improved Flexibility**: You can switch implementations at runtime.
- **Easy Maintenance**: Changes to the implementation do not require changes to the abstraction.

### Example

Here is a simple example:

```typescript
interface IAbstraction {
  method(value: string[]): void;
}

abstract class BaseAbstraction implements IAbstraction {
  protected implementer: IImplementer;

  constructor(implementer: IImplementer) {
    this.implementer = implementer;
  }

  abstract method(value: string[]): void;
}

class RefinedAbstractionA extends BaseAbstraction {
  method(value: string[]) {
    console.log('RefinedAbstractionA processing:');
    this.implementer.method(value);
  }
}

class RefinedAbstractionB extends BaseAbstraction {
  method(value: string[]) {
    console.log('RefinedAbstractionB processing:');
    this.implementer.method(value);
  }
}

interface IImplementer {
  method(value: string[]): void;
}

class ConcreteImplementerA implements IImplementer {
  method(value: string[]) {
    console.log('ConcreteImplementerA output:', value);
  }
}

class ConcreteImplementerB implements IImplementer {
  method(value: string[]) {
    console.log('ConcreteImplementerB output:');
    value.forEach((v) => console.log(v));
  }
}

// The Client
const VALUES = ['a', 'b', 'c'];

const abstractionA = new RefinedAbstractionA(new ConcreteImplementerA());
abstractionA.method(VALUES);

const abstractionB = new RefinedAbstractionB(new ConcreteImplementerB());
abstractionB.method(VALUES);
```

### Example 2

In this example, imagine you are designing a graphic drawing application where you want to represent shapes (like circles and squares) and allow them to be drawn in different ways (like in a vector format or raster format).

Step 1. **Define the Implementor Interface**

```typescript
interface DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void;
  drawSquare(x: number, y: number, side: number): void;
}
```

Step 2. **Create Concrete Implementors**

```typescript
// Concrete Implementor 1
class VectorAPI implements DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    console.log(`Vector Circle at (${x}, ${y}) with radius ${radius}`);
  }

  drawSquare(x: number, y: number, side: number): void {
    console.log(`Vector Square at (${x}, ${y}) with side ${side}`);
  }
}

// Concrete Implementor 2
class RasterAPI implements DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    console.log(`Raster Circle at (${x}, ${y}) with radius ${radius}`);
  }

  drawSquare(x: number, y: number, side: number): void {
    console.log(`Raster Square at (${x}, ${y}) with side ${side}`);
  }
}
```

Step 3. **Define the Abstraction**

```typescript
// Abstraction
abstract class Shape {
  protected drawingAPI: DrawingAPI;

  constructor(drawingAPI: DrawingAPI) {
    this.drawingAPI = drawingAPI;
  }

  abstract draw(): void; // Implemented in refined abstractions
  abstract resize(by: double): void; // To resize shapes
}
```

Step 4. **Create Refined Abstractions**

```typescript
// Refined Abstraction 1
class Circle extends Shape {
  private x: number;
  private y: number;
  private radius: number;

  constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
    super(drawingAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(): void {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }

  resize(by: number): void {
    this.radius *= by;
  }
}

// Refined Abstraction 2
class Square extends Shape {
  private x: number;
  private y: number;
  private side: number;

  constructor(x: number, y: number, side: number, drawingAPI: DrawingAPI) {
    super(drawingAPI);
    this.x = x;
    this.y = y;
    this.side = side;
  }

  draw(): void {
    this.drawingAPI.drawSquare(this.x, this.y, this.side);
  }

  resize(by: number): void {
    this.side *= by;
  }
}
```

Step 5. **Using the Bridge Pattern**

```typescript
function clientCode() {
  const vectorAPI = new VectorAPI();
  const rasterAPI = new RasterAPI();

  const circle = new Circle(5, 10, 15, vectorAPI);
  const square = new Square(20, 30, 10, rasterAPI);

  circle.draw(); // Vector Circle at (5, 10) with radius 15
  square.draw(); // Raster Square at (20, 30) with side 10

  circle.resize(2);
  circle.draw(); // Vector Circle at (5, 10) with radius 30
}

clientCode();
```

In this example, we defined a `DrawingAPI` interface that acts as the implementor, with concrete implementations in `VectorAPI` and `RasterAPI`. The `Shape` class serves as the abstraction, and `Circle` and `Square` are refined abstractions that use the drawing APIs.

This setup allows you to easily add new shapes or drawing methods without modifying the existing code, showcasing the flexibility and decoupling provided by the Bridge design pattern.

### When to use

The Bridge pattern is particularly useful in the following scenarios:

1. **When you want to decouple an abstraction from its implementation**:

   - If you anticipate that both the abstraction and the implementation might evolve independently, the Bridge pattern helps to separate them. This allows changes in one without affecting the other.

2. **When you have multiple variations of an abstraction and multiple variations of implementations**:

   - If you find yourself needing to manage different combinations of abstractions and implementations (like various shapes and rendering methods), the Bridge pattern helps reduce complexity by preventing an explosion of subclasses.

3. **When you want to avoid a permanent binding between an abstraction and its implementation**:

   - If you want to allow the implementation to change at runtime or want to switch implementations dynamically, the Bridge pattern is a good fit.

4. **When you want to hide implementation details from the client**:

   - If you want to provide a simple interface for the client while keeping the underlying implementation complex or varied, the Bridge pattern can help encapsulate that complexity.

5. **When you need to share implementations across different abstractions**:
   - If multiple abstractions need to use the same implementation, the Bridge pattern facilitates this sharing without forcing the abstractions to be tightly coupled to the implementation.

### Summary

The Bridge pattern is a powerful way to separate concerns in software design, promoting flexibility and maintainability. It is particularly beneficial in scenarios where both abstractions and their implementations are likely to change or evolve over time.
