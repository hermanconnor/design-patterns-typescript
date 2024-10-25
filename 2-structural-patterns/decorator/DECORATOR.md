# DECORATOR PATTERN

## What is the Decorator design pattern?

The Decorator pattern is a structural design pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. This pattern is particularly useful for adhering to the Open/Closed Principle, which states that software entities should be open for extension but closed for modification.

### Key Concepts of Decorator Pattern

1. **Component Interface**: This defines the interface for objects that can have responsibilities added to them.

2. **Concrete Component**: This class implements the component interface and represents the base object to which additional responsibilities can be attached.

3. **Decorator Class**: This class implements the component interface and has a reference to a component object. It delegates calls to the component and can add additional behavior.

4. **Concrete Decorators**: These classes extend the decorator class and modify or enhance the behavior of the component.

### When to Use the Decorator Pattern

- When you want to add responsibilities to individual objects dynamically and transparently, without affecting other objects.
- When you need to extend functionality in a flexible way, allowing for combinations of decorators.
- When subclassing would result in an explosion of classes for every combination of features.

### Example

Here's a simple example of a coffee shop where we can decorate a basic coffee with various condiments.

#### Step 1: Define the Component Interface

```typescript
interface ICoffee {
  cost(): number;
  description(): string;
}
```

#### Step 2: Implement the Concrete Component

```typescript
class SimpleCoffee implements ICoffee {
  public cost(): number {
    return 5; // Base cost of coffee
  }

  public description(): string {
    return 'Simple coffee';
  }
}
```

#### Step 3: Implement the Decorator Class

```typescript
abstract class CoffeeDecorator implements ICoffee {
  protected coffee: ICoffee;

  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }

  public abstract cost(): number;
  public abstract description(): string;
}
```

#### Step 4: Implement Concrete Decorators

```typescript
class MilkDecorator extends CoffeeDecorator {
  public cost(): number {
    return this.coffee.cost() + 1; // Adds cost for milk
  }

  public description(): string {
    return this.coffee.description() + ', with milk';
  }
}

class SugarDecorator extends CoffeeDecorator {
  public cost(): number {
    return this.coffee.cost() + 0.5; // Adds cost for sugar
  }

  public description(): string {
    return this.coffee.description() + ', with sugar';
  }
}
```

#### Step 5: Using the Decorator Pattern

```typescript
function clientCode() {
  let coffee: ICoffee = new SimpleCoffee();
  console.log(`${coffee.description()} costs $${coffee.cost()}`);

  // Adding milk
  coffee = new MilkDecorator(coffee);
  console.log(`${coffee.description()} costs $${coffee.cost()}`);

  // Adding sugar
  coffee = new SugarDecorator(coffee);
  console.log(`${coffee.description()} costs $${coffee.cost()}`);
}

clientCode();
```

### Explanation of the above code

1. **Component Interface**: The `ICoffee` interface defines the methods `cost` and `description` that all coffee types must implement.
2. **Concrete Component**: The `SimpleCoffee` class implements the `ICoffee` interface, providing the base functionality.
3. **Decorator Class**: The `CoffeeDecorator` abstract class implements the `ICoffee` interface and holds a reference to a `ICoffee` object, allowing it to extend the behavior of the component.
4. **Concrete Decorators**: `MilkDecorator` and `SugarDecorator` extend `CoffeeDecorator` to add their respective functionalities to the coffee.
5. **Client Code**: Demonstrates how to create a simple coffee and dynamically add condiments to it using decorators.

### Benefits of Using Decorator

- **Flexibility**: You can add or remove responsibilities at runtime, allowing for dynamic behavior.
- **Avoids Class Explosion**: You can create combinations of behaviors without needing a large number of subclasses.
- **Single Responsibility**: Each decorator has a single responsibility, adhering to the Single Responsibility Principle.

### Summary

The Decorator Pattern is a powerful way to add behavior to individual objects dynamically. It promotes code reusability and flexibility, allowing you to create complex functionalities by combining simpler components. This pattern is especially useful in scenarios where you want to extend functionality in a modular way without resorting to extensive inheritance hierarchies.
