# TEMPLATE METHOD PATTERN

## What is the Template Method design pattern?

The Template Method design pattern is a behavioral design pattern that defines the skeleton of an algorithm in a method, allowing subclasses to redefine certain steps without changing the structure of the algorithm. This pattern is particularly useful when you have common steps in a process but want to allow variations in specific parts of that process.

### Key Concepts

1. **Template Method**: The core method that outlines the algorithm. It typically consists of a sequence of steps, where some steps are defined in the base class and some can be overridden by subclasses.

2. **Abstract Class**: The base class that provides the template method and may contain abstract methods that subclasses must implement.

3. **Concrete Class**: Subclasses that implement the abstract methods defined in the base class, providing specific behavior.

### When to Use

- When you want to define the skeleton of an algorithm and let subclasses provide specific implementations for some steps.
- To promote code reuse and consistency in algorithms that share a common structure.
- When you want to control the order of execution of certain operations.

### Example

Here's a simple example:

```typescript
// Abstract class defining the template method
abstract class Beverage {
  // Template method
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  // Common steps
  boilWater(): void {
    console.log('Boiling water');
  }

  pourInCup(): void {
    console.log('Pouring into cup');
  }

  // Abstract methods to be implemented by subclasses
  abstract brew(): void;
  abstract addCondiments(): void;
}

// Concrete class for Tea
class Tea extends Beverage {
  brew(): void {
    console.log('Steeping the tea');
  }

  addCondiments(): void {
    console.log('Adding lemon');
  }
}

// Concrete class for Coffee
class Coffee extends Beverage {
  brew(): void {
    console.log('Dripping coffee through filter');
  }

  addCondiments(): void {
    console.log('Adding sugar and milk');
  }
}

// Client code
function makeBeverage(beverage: Beverage): void {
  beverage.prepareRecipe();
}

// Usage
const tea = new Tea();
const coffee = new Coffee();

makeBeverage(tea);
console.log('---');
makeBeverage(coffee);
```

### Explanation of the above code

1. **Abstract Class (`Beverage`)**: This class defines the `prepareRecipe` method, which is the template method. It calls other methods in a specific order. The `boilWater` and `pourInCup` methods are concrete, while `brew` and `addCondiments` are abstract and must be implemented by subclasses.

2. **Concrete Classes (`Tea` and `Coffee`)**: These classes implement the `brew` and `addCondiments` methods, providing specific behaviors for making tea and coffee.

3. **Client Code**: The `makeBeverage` function takes a `Beverage` object and calls the `prepareRecipe` method, allowing the specific beverage preparation steps to be executed.

### Benefits of the Template Method Pattern

- **Code Reusability**: Common code is written once in the abstract class, reducing redundancy.
- **Flexibility**: Subclasses can provide their specific implementations while maintaining the overall algorithm structure.
- **Control**: The order of method execution is controlled by the template method, ensuring consistency.

### Drawbacks

- **Tight Coupling**: The template method may become tightly coupled with subclasses, making changes in the base class affect all subclasses.
- **Complex Hierarchies**: If not designed carefully, the inheritance hierarchy can become complex and hard to manage.

### Summary

This pattern is a powerful tool for structuring algorithms in a way that promotes code reuse and clarity.
