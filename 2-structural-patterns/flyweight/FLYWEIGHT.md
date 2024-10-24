# FLYWEIGHT PATTERN

## What is the Flyweight Pattern?

The Flyweight design pattern is a structural pattern that aims to minimize memory usage by sharing common data among similar objects. Instead of creating new instances for every object, the Flyweight pattern allows you to create a single instance and share it across multiple contexts.

### Key Concepts of Flyweight Pattern

1. **Flyweight**: The core class that contains shared state (intrinsic state) and methods that operate on that state. The intrinsic state is shared across all instances, while the extrinsic state is context-specific and passed to the Flyweight methods.

2. **Factory**: A factory is often used to manage Flyweights, creating new ones only when necessary and returning existing ones otherwise.

3. **Client**: The client uses the Flyweight objects. It handles the extrinsic state and manages the context in which Flyweights are used.

### When to Use Flyweight

- When you need to create a large number of objects that share some common state.
- When memory consumption is a concern.
- When the shared objects are immutable or have a well-defined API for working with their state.

### Example

Here is a simple example:

#### Step 1: Define the Flyweight Interface

```typescript
interface IShape {
  draw(extrinsicState: { x: number; y: number }): void;
}
```

#### Step 2: Create Concrete Flyweight Classes

```typescript
class Circle implements IShape {
  constructor(private color: string) {}

  draw(extrinsicState: { x: number; y: number }): void {
    console.log(
      `Drawing a ${this.color} circle at (${extrinsicState.x}, ${extrinsicState.y})`,
    );
  }
}

class Square implements IShape {
  constructor(private color: string) {}

  draw(extrinsicState: { x: number; y: number }): void {
    console.log(
      `Drawing a ${this.color} square at (${extrinsicState.x}, ${extrinsicState.y})`,
    );
  }
}
```

#### Step 3: Create the Flyweight Factory

```typescript
class ShapeFactory {
  private shapes: { [key: string]: IShape } = {};

  getShape(color: string, type: string): IShape {
    const key = `${color}_${type}`;

    if (!this.shapes[key]) {
      if (type === 'circle') {
        this.shapes[key] = new Circle(color);
      } else if (type === 'square') {
        this.shapes[key] = new Square(color);
      }
    }
    return this.shapes[key];
  }
}
```

#### Step 4: Use the Flyweights in the Client

```typescript
class GraphicsEditor {
  private factory: ShapeFactory = new ShapeFactory();

  drawShapes(): void {
    const shapes = [
      { type: 'circle', color: 'red', x: 10, y: 20 },
      { type: 'circle', color: 'red', x: 30, y: 40 },
      { type: 'square', color: 'blue', x: 50, y: 60 },
      { type: 'square', color: 'blue', x: 70, y: 80 },
      { type: 'circle', color: 'green', x: 90, y: 100 },
    ];

    shapes.forEach(({ type, color, x, y }) => {
      const shape = this.factory.getShape(color, type);
      shape.draw({ x, y });
    });
  }
}

const editor = new GraphicsEditor();
editor.drawShapes();
```

### Explanation of the above code

1. **Shape Interface**: Defines a method for drawing shapes that requires extrinsic state (position).

2. **Concrete Flyweights (Circle and Square)**: Each shape holds intrinsic state (color) and can be drawn at various positions.

3. **ShapeFactory**: Manages the creation of shapes. It checks if a shape with a given color and type exists, creating it only if it doesn’t.

4. **GraphicsEditor**: The client that uses the `ShapeFactory` to draw shapes, providing their extrinsic state (position) at runtime.

### Summary

The Flyweight pattern is a powerful tool for reducing memory usage when dealing with many similar objects. By separating intrinsic and extrinsic states, you can effectively share objects and manage their lifecycles.
