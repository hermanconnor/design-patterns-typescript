# Inheritance and Composition

Composition and inheritance are two fundamental concepts in object-oriented programming (OOP) that help establish relationships between classes. Each approach has its strengths and weaknesses, and understanding them can help you choose the right design for your application.

### Inheritance

Inheritance allows a class (the subclass) to inherit properties and methods from another class (the superclass). This creates an "is-a" relationship.

#### Characteristics:

- **Code Reusability**: Subclasses can reuse code from superclasses.
- **Hierarchical Classification**: Organizes classes in a hierarchy, which can be intuitive for certain relationships.
- **Polymorphism**: Supports polymorphism, allowing subclasses to override methods and be treated as instances of the superclass.

#### Example:

```typescript
class Animal {
  public makeSound(): void {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  public makeSound(): void {
    console.log('Woof!');
  }
}

const myDog = new Dog();
myDog.makeSound(); // Output: Woof!
```

### Composition

Composition involves building complex objects by combining simpler objects (components). This creates a "has-a" relationship.

#### Characteristics:

- **Flexibility**: Allows for dynamic behavior by changing the components at runtime.
- **Encapsulation**: Each component can manage its own state and behavior, leading to better encapsulation.
- **Reduced Coupling**: Components are loosely coupled, making it easier to change or replace them without affecting other parts of the system.

#### Example:

```typescript
class Engine {
  public start(): void {
    console.log('Engine starts');
  }
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine(); // Composition: Car "has-a" Engine
  }

  public start(): void {
    this.engine.start(); // Delegating behavior to the Engine
    console.log('Car starts');
  }
}

const myCar = new Car();
myCar.start(); // Output: Engine starts
//          Car starts
```

### Comparison: Composition vs. Inheritance

| Feature              | Inheritance                                            | Composition                                            |
| -------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| Relationship Type    | "is-a" relationship                                    | "has-a" relationship                                   |
| Code Reusability     | Reuses code through superclass                         | Reuses behavior by composing objects                   |
| Flexibility          | Less flexible; changes in superclass affect subclasses | More flexible; can change components easily            |
| Coupling             | Tightly coupled with superclass                        | Loosely coupled; components can be replaced            |
| Change Impact        | Changes in the superclass affect all subclasses        | Changes in components affect only those that use them  |
| Polymorphism Support | Strongly supports polymorphism                         | Can use polymorphism, but typically through interfaces |

### When to Use Inheritance vs. Composition

- **Use Inheritance When**:

  - You have a clear hierarchical relationship (e.g., a `Dog` is an `Animal`).
  - You need to share common behavior and state across multiple classes.
  - You want to take advantage of polymorphism.

- **Use Composition When**:
  - You want to combine behaviors from different sources (e.g., a `Car` has an `Engine` and possibly other components like `Wheels`).
  - You need more flexibility and want to change behavior at runtime.
  - You want to reduce the complexity of your class hierarchy.

### Conclusion

Both inheritance and composition are valuable tools in OOP, and the choice between them often depends on the specific requirements of your application. Composition is generally favored in modern software design for its flexibility and decoupling advantages, while inheritance can be useful in cases where a clear hierarchical relationship exists. Understanding both concepts will help you design better software systems.
