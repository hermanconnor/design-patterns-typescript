# PROTOTYPE PATTERN

## What is the Prototype pattern?

The Prototype design pattern is a creational pattern that allows you to create new objects by copying an existing object, known as the prototype. This can be useful when the cost of creating a new instance of an object is more expensive than copying an existing one.

### Key Concepts

1. **Object Cloning**: The core idea is to create new objects by cloning a prototype instance.
2. **Encapsulation of Creation Logic**: The pattern encapsulates the creation logic, allowing subclasses to alter the type of objects that will be created.
3. **Dynamic Behavior**: It allows for dynamic changes to the object type at runtime.

### When to Use the Prototype Pattern

- When the cost of creating a new instance of an object is more expensive than copying an existing instance.
- When you want to avoid the need for subclasses to implement complex creation logic.
- When you need a way to instantiate objects that are configurable in terms of state.

### Common Use Cases

- When dealing with large or complex objects that are costly to create.
- For situations where the types of objects can change at runtime.
- In scenarios like game development, where you might need multiple instances of an object with similar characteristics.

### Example

Here’s a simple example:

```typescript
// Step 1: Define an interface for cloning
interface IClonable {
  clone(): IClonable;
}

// Step 2: Create a concrete class that implements Clonable
class ConcretePrototype implements IClonable {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public clone(): IClonable {
    return new ConcretePrototype(this.name, this.age);
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Step 3: Use the Prototype class to create new instances
const original = new ConcretePrototype('Alice', 30);
original.displayInfo(); // Name: Alice, Age: 30

const clone1 = original.clone() as ConcretePrototype;
clone1.displayInfo(); // Name: Alice, Age: 30

const clone2 = original.clone() as ConcretePrototype;
clone2.displayInfo(); // Name: Alice, Age: 30
```

### Explanation of the Code

1. **Prototype Interface**: `interface IClonable` defines a method `clone()` that returns a new instance of the object.
2. **Concrete Prototype Class**: `class ConcretePrototype` implements the `IClonable` interface. It contains the state and a method to clone itself.
3. **Clone Method**: The `clone()` method creates and returns a new instance of `ConcretePrototype`, copying the state from the original.
4. **Display Method**: `displayState()` is used to demonstrate the object's state.

### Advantages

- Reduces the need for a complex class hierarchy by using cloning.
- Simplifies object creation when the object initialization is expensive.
- Encourages the use of a consistent interface for object creation.

### Disadvantages

- Cloning complex objects can be tricky if they have circular references or if they maintain a complex internal state.
- Requires careful management of shared references when deep cloning is needed.

### Summary

The Prototype pattern is useful for reducing the overhead of object creation, especially in cases where creating an instance from scratch is costly. By cloning, we can create new objects quickly based on existing ones.
