# Object-oriented Programming (OOP)

Object-oriented programming (OOP) is a programming paradigm that uses "objects" to represent data and methods. It aims to model real-world entities and their interactions, making code more modular, reusable, and easier to maintain.

### Key Concepts

1. **Objects**: The core building blocks of OOP. An object is an instance of a class and can hold both data (attributes) and functions (methods).

2. **Classes**: A blueprint for creating objects. A class defines properties (attributes) and behaviors (methods) that the objects created from the class will have.

3. **Attributes**: Variables that hold data related to an object. For example, in a `Car` class, attributes could include `color`, `model`, and `year`.

4. **Methods**: Functions defined within a class that describe the behaviors of an object. For instance, a `Car` class might have methods like `start()`, `stop()`, or `drive()`.

### Core Principles

1. **Encapsulation**: Bundling the data (attributes) and methods that operate on the data into a single unit (class) and restricting access to some components. This helps protect the internal state of an object.

2. **Inheritance**: A mechanism where a new class can inherit properties and methods from an existing class. This promotes code reuse. For example, if you have a `Vehicle` class, a `Car` class can inherit from it.

3. **Polymorphism**: The ability to present the same interface for different underlying forms (data types). It allows methods to do different things based on the object it is acting upon. For example, a method `make_sound()` could behave differently for a `Dog` class and a `Cat` class.

4. **Abstraction**: The concept of hiding the complex reality while exposing only the necessary parts. It helps to reduce programming complexity by allowing you to interact with a simplified model of the underlying system.

### Basic Example in TypeScript

Here's a simple example of a class in TypeScript:

```typescript
class Car {
  constructor(public color: string, public model: string, public year: number) {
    this.color = color; // Attribute
    this.model = model; // Attribute
    this.year = year; // Attribute
  }

  // Method
  start() {
    console.log(`${this.model} is starting.`);
  }

  // Method
  stop() {
    console.log(`${this.model} is stopping.`);
  }
}

// Creating an object (instance) of the Car class
const myCar = new Car('Black', 'Toyota', 2020);

// Accessing attributes
console.log(myCar.color); // Output: Black

// Calling methods
myCar.start(); // Output: Toyota is starting.
```

### Advantages of OOP

1. **Modularity**: Code is organized into classes, making it easier to manage and understand.
2. **Reusability**: Classes can be reused across different programs or parts of a program.
3. **Maintainability**: Easier to update and maintain code due to encapsulation and modular design.
4. **Flexibility**: Polymorphism and inheritance allow for flexible and dynamic code.
