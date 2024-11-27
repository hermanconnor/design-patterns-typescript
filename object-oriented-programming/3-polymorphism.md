# Polymorphism

This concept allows methods to do different things based on the object it is acting upon. It enables the same method to be defined in multiple classes, each implementing it in its own way.

### Key Features of Polymorphism

1. **Method Overriding**: Subclasses can provide a specific implementation of a method that is already defined in their superclass. This allows for dynamic method resolution at runtime.

2. **Method Overloading**: In some languages, polymorphism also refers to method overloading, where multiple methods can have the same name but different parameter lists. However, TypeScript primarily emphasizes method overriding in the context of inheritance.

3. **Interface Implementation**: Different classes can implement the same interface, providing their own version of the methods defined in that interface.

### Types of Polymorphism

1. **Compile-time Polymorphism**: Achieved through method overloading and operator overloading (not commonly used in TypeScript).
2. **Runtime Polymorphism**: Achieved through method overriding, where the method that gets executed is determined at runtime based on the object type.

### Example

Here’s an example illustrating polymorphism through method overriding and interface implementation

#### Method Overriding

```typescript
// Base class
class Animal {
  public makeSound(): void {
    console.log('Animal makes a sound');
  }
}

// Subclass 1
class Dog extends Animal {
  public makeSound(): void {
    console.log('Woof!');
  }
}

// Subclass 2
class Cat extends Animal {
  public makeSound(): void {
    console.log('Meow!');
  }
}

// Using polymorphism with method overriding
function animalSound(animal: Animal): void {
  animal.makeSound(); // Calls the overridden method based on the actual object type
}

// Creating instances
const myDog = new Dog();
const myCat = new Cat();

// Using the polymorphic function
animalSound(myDog); // Output: Woof!
animalSound(myCat); // Output: Meow!
```

### Explanation

1. **Base Class (Animal)**: The `Animal` class has a method `makeSound()`, which provides a default behavior.

2. **Subclass (Dog and Cat)**: Both `Dog` and `Cat` classes extend `Animal` and override the `makeSound()` method to provide their specific sounds.

3. **Polymorphic Function**: The `animalSound()` function takes an `Animal` parameter and calls the `makeSound()` method. At runtime, it determines which version of `makeSound()` to invoke based on the actual object type passed (either `Dog` or `Cat`).

#### Interface Example

Polymorphism can also be achieved through interfaces

```typescript
// Interface
interface Shape {
  area(): number;
}

// Class implementing the interface
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  public area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Using polymorphism with interfaces
function printArea(shape: Shape) {
  console.log(`Area: ${shape.area()}`);
}

const rectangle = new Rectangle(10, 5);
const circle = new Circle(7);

printArea(rectangle); // Output: Area: 50
printArea(circle); // Output: Area: 153.93804002589985
```

### Explanation

1. **Interface (Shape)**: Defines a contract with the `area()` method.

2. **Classes (Rectangle and Circle)**: Both classes implement the `Shape` interface and provide their own implementation of the `area()` method.

3. **Polymorphic Function**: The `printArea()` function accepts any object that implements the `Shape` interface, demonstrating polymorphism through interface implementation.

### Conclusion

Polymorphism enhances the flexibility and reusability of code. It allows different classes to be treated through a common interface, facilitating cleaner and more maintainable code.
