# FACTORY PATTERN

## What is the Factory design pattern?

The Factory design pattern is a creational design pattern used to create objects in a way that promotes flexibility and reuse. It allows for the instantiation of objects without specifying the exact class of the object that will be created. Instead, a factory method or class is used to handle the creation process, which can involve complex logic or conditions. This is particularly useful when you want to abstract the instantiation process and encapsulate it in a factory class.

### Key Components

1. **Product Interface**:

   - This is an interface that defines the common methods for the objects created by the factory.

2. **Concrete Products**:

   - These are the classes that implement the product interface. They represent the specific types of objects that the factory will create (e.g., `Circle`, `Square`).

3. **Factory Interface (optional)**:

   - This interface defines the method for creating products. In some cases, it may not be explicitly defined, especially in simple factory patterns.

4. **Concrete Factory**:

   - This is the class that implements the factory interface (if used) and contains the logic to instantiate and return concrete products. In our example, it’s the `ShapeFactory` class.

5. **Client Code**:
   - This is the code that uses the factory to create objects. The client code interacts with the factory instead of directly instantiating the products.

### Type of Factory Pattern:

- **Simple Factory**: It centralizes object creation in a single factory method that returns specific types based on input parameters. This method does not rely on inheritance or abstract classes.
- **Factory Method**: This pattern relies on an abstract class (creator) that defines a method for creating objects, allowing subclasses to override that method to create specific objects. This adds a layer of abstraction and flexibility.

### When to Use the Factory Pattern

- When a class cannot anticipate the type of objects it needs to create.
- When you want to delegate the responsibility of object creation to subclasses.
- When the creation process involves complex logic that should be isolated from the client code.

### Example

Here is a simple example:

```ts
// Product interface
interface IProduct {
  operation(): string;
}

// Concrete Products
class ConcreteProductA implements IProduct {
  public operation(): string {
    return 'Result from ConcreteProductA';
  }
}

class ConcreteProductB implements IProduct {
  public operation(): string {
    return 'Result from ConcreteProductB';
  }
}

// Factory
class ProductFactory {
  public static createProduct(type: string): IProduct | null {
    switch (type) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      default:
        return null;
    }
  }
}

// Usage
const productA = ProductFactory.createProduct('A');
console.log(productA?.operation()); // Result from ConcreteProductA

const productB = ProductFactory.createProduct('B');
console.log(productB?.operation()); // Result from ConcreteProductB
```

### Explanation of the above code

1. **Product Interface**: The `IProduct` interface defines a common interface for all products created by the factory.
2. **Concrete Products**: `ConcreteProductA` and `ConcreteProductB` are implementations of the `IProduct` interface, each with its own behavior.
3. **Factory Class**: The `ProductFactory` class contains a static method `createProduct(type: string)` that takes a type identifier and returns the corresponding product instance based on the input.
4. **Usage**: The factory is used to create instances of products without the client needing to know about their concrete classes.

### Advantages

- Promotes loose coupling between the client and the product classes.
- Simplifies the object creation process, making it easier to manage.
- Enhances code readability and maintainability.

### Disadvantages

- Can lead to increased complexity in the codebase if overused or if the factory logic becomes convoluted.
- May hide class dependencies, making it less clear what specific types of objects are being created.

### Summary

The Factory design pattern is powerful and versatile, offering significant benefits in terms of flexibility, maintainability, and testing. If you anticipate changes in the types of objects your application will need or want to simplify the instantiation process, the Factory pattern is a solid choice.
