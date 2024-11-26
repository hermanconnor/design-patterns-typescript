# Inheritance

Inheritance is a key principle of object-oriented programming (OOP) that allows a class (called a subclass or derived class) to inherit properties and methods from another class (called a superclass or base class). This promotes code reuse and establishes a hierarchical relationship between classes.

### Key Features of Inheritance

1. **Reusability**: You can reuse existing code, which helps reduce redundancy and improve maintainability.

2. **Hierarchical Classification**: It establishes a relationship between classes, making it easier to organize and categorize them.

3. **Override Methods**: A subclass can provide a specific implementation of a method that is already defined in its superclass.

### Types of Inheritance

1. **Single Inheritance**: A subclass inherits from a single superclass.
2. **Multiple Inheritance**: A subclass inherits from multiple superclasses (not directly supported in TypeScript).
3. **Multilevel Inheritance**: A class is derived from another derived class.
4. **Hierarchical Inheritance**: Multiple subclasses inherit from a single superclass.

### Example

Here's an example to illustrate inheritance:

```typescript
// Base class
class Vehicle {
  protected speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  public move(): void {
    console.log(`Moving at speed: ${this.speed} miles per hour`);
  }
}

// Subclass
class Car extends Vehicle {
  private model: string;

  constructor(speed: number, model: string) {
    super(speed); // Call the constructor of the superclass (Vehicle)
    this.model = model;
  }

  public displayModel(): void {
    console.log(`Car model: ${this.model}`);
  }

  // Overriding the move method
  public move(): void {
    console.log(`The car is moving at speed: ${this.speed} miles per hour`);
  }
}

// Another subclass
class Motorcycle extends Vehicle {
  private type: string;

  constructor(speed: number, type: string) {
    super(speed);
    this.type = type;
  }

  public displayType(): void {
    console.log(`Motorcycle type: ${this.type}`);
  }
}

// Using the classes
const myCar = new Car(70, 'Dodge');
myCar.move(); // The car is moving at speed: 70 miles per hour
myCar.displayModel(); // Car model: Dodge

const myMotorcycle = new Motorcycle(90, 'Dirt Bike');
myMotorcycle.move(); // Moving at speed: 90 miles per hour
myMotorcycle.displayType(); // Motorcycle type: Dirt Bike
```

### Explanation

1. **Base Class (Vehicle)**: This class has a protected property `speed` and a method `move()`. The `protected` modifier allows subclasses to access `speed`, but it’s not accessible outside of the class hierarchy.

2. **Subclass (Car)**:

   - The `Car` class extends `Vehicle`, inheriting its properties and methods.
   - The constructor of `Car` calls the superclass constructor with `super(speed)`, initializing the inherited `speed`.
   - The `move()` method is overridden to provide a specific implementation for `Car`.

3. **Another Subclass (Motorcycle)**: The `Motorcycle` class also extends `Vehicle`, demonstrating that multiple subclasses can inherit from the same superclass.

### Conclusion

Inheritance enhances code organization and reuse by allowing subclasses to inherit from superclasses. It supports the creation of hierarchical relationships among classes, making it easier to manage complex systems.
