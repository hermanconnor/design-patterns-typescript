# COMPOSITE PATTERN

## What is the Composite Pattern?

The Composite Design Pattern is a structural design pattern that allows you to compose objects into tree-like structures to represent part-whole hierarchies. This pattern lets clients treat individual objects and compositions of objects uniformly. It's especially useful when dealing with tree structures, such as graphics systems, file systems, or organizational structures.

### Key Concepts of the Composite Pattern

1. **Component**: This is an abstract class or interface that defines the common interface for both leaf and composite objects.

2. **Leaf**: These are the basic building blocks that do not have any children. They implement the Component interface and provide behavior for the leaf nodes.

3. **Composite**: This class implements the Component interface and contains child components (which can be either Leaf or Composite). It manages its child components and implements behavior that is relevant to them.

### Benefits of the Composite Pattern

- **Simplifies Client Code**: Clients can interact with individual objects and compositions in the same way, simplifying the code.
- **Flexibility**: It allows you to build complex structures from simpler objects.
- **Easier to Extend**: New components can be added without modifying existing code.

### When to Use the Composite Pattern

- When you need to represent part-whole hierarchies.
- When clients should be able to treat individual objects and compositions uniformly.
- When you want to implement a tree structure.

### Example

Here is a simple example where we model a graphic system with shapes (like circles and rectangles), and groups of shapes.

```typescript
// Component
interface Shape {
  draw(): void;
}

// Leaf
class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  draw(): void {
    console.log(`Drawing a circle with radius: ${this.radius}`);
  }
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  draw(): void {
    console.log(
      `Drawing a rectangle with width: ${this.width} and height: ${this.height}`,
    );
  }
}

// Composite
class ShapeGroup implements Shape {
  private shapes: Shape[] = [];

  add(shape: Shape): void {
    this.shapes.push(shape);
  }

  remove(shape: Shape): void {
    const index = this.shapes.indexOf(shape);
    if (index !== -1) {
      this.shapes.splice(index, 1);
    }
  }

  draw(): void {
    console.log('Drawing a shape group:');
    for (const shape of this.shapes) {
      shape.draw(); // Delegates the drawing to child shapes
    }
  }
}

// Client Code
const circle1 = new Circle(5);
const rectangle1 = new Rectangle(10, 20);
const circle2 = new Circle(3);

const group1 = new ShapeGroup();
group1.add(circle1);
group1.add(rectangle1);

const group2 = new ShapeGroup();
group2.add(circle2);
group2.add(group1); // Adding a group into another group

// Draw everything
group2.draw();
```

#### In the above code

1. **Shape Interface**: This defines the common interface for all shapes.
2. **Circle and Rectangle Classes**: These are leaf classes that implement the `Shape` interface and provide specific implementations for the `draw` method.
3. **ShapeGroup Class**: This is a composite class that can contain both `Shape` objects and other `ShapeGroup` objects. It implements the `add`, `remove`, and `draw` methods.
4. **Client Code**: This creates instances of `Circle`, `Rectangle`, and `ShapeGroup`, and demonstrates how to draw the entire structure.

### Summary

The Composite Pattern is a powerful way to build complex tree structures while maintaining a simple interface for clients. It allows for easy extension and simplifies the handling of part-whole relationships.
