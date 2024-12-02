# Method Overriding

Method overriding is a key concept in object-oriented programming (OOP) that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. This enables polymorphism and allows subclasses to tailor behavior according to their needs.

### Key Concepts of Method Overriding

1. **Inheritance**: Method overriding occurs in the context of inheritance. A subclass inherits methods from its superclass and can override them.

2. **Same Method Signature**: The method in the subclass must have the same name, return type, and parameters as the method in the superclass.

3. **Dynamic Method Resolution**: The method that gets executed is determined at runtime based on the object type, not the reference type. This is fundamental to achieving polymorphic behavior.

4. **Access Modifiers**: The overriding method can have the same or less restrictive access level compared to the method in the superclass. For example, a `protected` method can be overridden as `protected` or `public`, but not as `private`.

### Example

Here’s an example demonstrating method overriding:

```typescript
// Base class
class Animal {
  public makeSound(): void {
    console.log('Animal makes a sound');
  }
}

// Subclass: Dog
class Dog extends Animal {
  public makeSound(): void {
    console.log('Woof!');
  }
}

// Subclass: Cat
class Cat extends Animal {
  public makeSound(): void {
    console.log('Meow!');
  }
}

// Function demonstrating polymorphism
function animalSound(animal: Animal): void {
  animal.makeSound(); // Calls the overridden method based on the actual object type
}

// Using the classes
const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog); // Output: Woof!
animalSound(myCat); // Output: Meow!
```

### Explanation of the Example

1. **Base Class (Animal)**: The `Animal` class has a method `makeSound()` that provides a default implementation.

2. **Subclasses (Dog and Cat)**:

   - The `Dog` class overrides the `makeSound()` method to provide its specific implementation, outputting "Woof!".
   - The `Cat` class also overrides the `makeSound()` method to provide its implementation, outputting "Meow!".

3. **Polymorphic Behavior**: The function `animalSound()` takes an `Animal` parameter. It calls the `makeSound()` method, but the actual method that gets executed depends on the type of object passed (either `Dog` or `Cat`). This demonstrates polymorphism and method overriding.

### Considerations for Method Overriding

- **Calling Superclass Methods**: You can call the superclass’s method within the overridden method using `super`. This is useful when you want to extend the behavior rather than completely replace it.

  ```typescript
  class Dog extends Animal {
    public makeSound(): void {
      super.makeSound(); // Call the superclass method
      console.log('Woof!');
    }
  }
  ```

### Method Overriding vs. Overloading

It’s important to distinguish between overriding and overloading:

- **Overriding**: Redefining a method in a subclass with the same signature as in the superclass.
- **Overloading**: Defining multiple methods with the same name but different parameter lists within the same class.

### Conclusion

Method overriding is a powerful feature of OOP that allows for dynamic behavior and polymorphism. It enables subclasses to provide specialized implementations of methods defined in their superclasses, facilitating cleaner, more maintainable code.
