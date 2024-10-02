# ABSTRACT FACTORY PATTERN

## What is the Abstract Factory Pattern?

The Abstract Factory design pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### Key Components:

1. **Abstract Factory**: An interface that declares methods for creating abstract products.

2. **Concrete Factory**: A class that implements the Abstract Factory interface and produces specific instances of products.

3. **Abstract Products**: Interfaces or abstract classes for a family of products (e.g., ProductA, ProductB).

4. **Concrete Products**: Classes that implement the abstract product interfaces, providing specific implementations.

### When to use the abstract factory pattern?

The Abstract Factory design pattern is particularly useful in several scenarios:

1. **Family of Related Objects**: When your application needs to create a set of related or dependent objects without specifying their concrete classes. For instance, if you're building a UI toolkit that needs to support different look-and-feel themes, the Abstract Factory can help you create buttons, text fields, and checkboxes that are consistent with a chosen theme.

2. **Product Variants**: When your application needs to work with multiple families of products, and you want to ensure that the products from one family are used together. For example, in a game, you might have different character types (e.g., warrior, mage) that come with their own sets of weapons and armor.

3. **Encapsulation of Object Creation**: If you want to encapsulate the creation logic of your objects to separate it from their usage. This helps in managing code changes easily—if you need to switch to a different family of products, you only need to modify the factory, not the client code.

4. **Platform Independence**: When your application needs to be adaptable to different environments or platforms. The Abstract Factory can allow you to create platform-specific implementations (like Windows vs. macOS UI components) without changing the client code that uses these components.

5. **Testing and Mocking**: It’s easier to create mock objects for testing when you use factories. You can substitute a real factory with a mock factory that generates dummy objects, making your tests more straightforward.

Overall, you should consider the Abstract Factory pattern when you need a scalable way to manage object creation, especially when dealing with complex systems involving multiple interrelated objects.

### PROS AND CONS

#### Pros

1. **Encapsulation of Object Creation**: It centralizes the creation logic, making the code cleaner and easier to manage. Changes in object creation only affect the factory, not the client code.

2. **Consistency Among Products**: Ensures that products created by the same factory are compatible and work well together, promoting consistency in the system.

3. **Flexibility and Scalability**: Adding new families of products or variants requires minimal changes to existing code. You can introduce new factories without affecting existing client code.

4. **Ease of Testing**: Mocking or stubbing can be easily achieved by swapping out factories, simplifying unit testing and making tests more focused.

5. **Reduced Coupling**: Clients depend on abstractions rather than concrete implementations, making the system more modular and easier to maintain.

#### Cons

1. **Complexity**: It can introduce additional layers of abstraction, making the system more complex. For small projects or simple use cases, this added complexity might be unnecessary.

2. **Overhead of Creating Interfaces**: Defining multiple interfaces and factories can lead to more code to maintain, which may not be justified for simpler scenarios.

3. **Difficulty in Understanding**: New developers or those unfamiliar with the pattern may find it challenging to understand how the factories work and how to use them effectively.

4. **Potential for Bloating**: If not managed well, the number of factories and product classes can grow significantly, leading to code bloat and harder maintenance.

5. **Rigidity**: While it provides flexibility for adding new products, it can also become rigid if the initial design doesn’t anticipate future needs or variations.

In summary, while the Abstract Factory pattern offers significant advantages in terms of organization, flexibility, and testing, it’s important to weigh these against the complexity and potential overhead it can introduce.

### Example

```ts
// FactoryA.ts
export interface IProductA {
  name: string;
}

class ConcreteProduct implements IProductA {
  name: string = '';
  constructor() {}
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'Factory A: ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'Factory A: ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'Factory A: ConcreteProductC';
  }
}

export class FactoryA {
  constructor() {}

  static getObject = (someProperty: string): IProductA => {
    try {
      if (someProperty.toLowerCase() === 'a') {
        return new ConcreteProductA();
      } else if (someProperty.toLowerCase() === 'b') {
        return new ConcreteProductB();
      } else if (someProperty.toLowerCase() === 'c') {
        return new ConcreteProductC();
      } else {
        throw new Error('Class not found');
      }
    } catch (error) {
      console.log(error);
    }

    return new ConcreteProduct();
  };
}

// FactoryB.ts
export interface IProductB {
  name: string;
}

class ConcreteProduct implements IProductB {
  name: string = '';
  constructor() {}
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'Factory B: ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'Factory B: ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'Factory B: ConcreteProductC';
  }
}

export class FactoryB {
  constructor() {}

  static getObject = (someProperty: string): IProductB => {
    try {
      if (someProperty.toLowerCase() === 'a') {
        return new ConcreteProductA();
      } else if (someProperty.toLowerCase() === 'b') {
        return new ConcreteProductB();
      } else if (someProperty.toLowerCase() === 'c') {
        return new ConcreteProductC();
      } else {
        throw new Error('Class not found');
      }
    } catch (error) {
      console.log(error);
    }

    return new ConcreteProduct();
  };
}

// abstract-factory-concept.ts
import { FactoryA, IProductA } from './FactoryA';
import { FactoryB, IProductB } from './FactoryB';

interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
  constructor() {}

  static createObject(factory: string): IProduct | undefined {
    try {
      if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
        return FactoryA.getObject(factory[1]);
      }

      if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
        return FactoryB.getObject(factory[1]);
      }

      throw new Error('No factory found');
    } catch (error) {
      console.log(error);
    }
  }
}

// The Client
let PRODUCT = AbstractFactory.createObject('ab');
console.log(PRODUCT);

PRODUCT = AbstractFactory.createObject('bc');
console.log(PRODUCT);
```

### Summary

In summary, the Abstract Factory pattern is an effective way to manage object creation in a flexible and organized manner, particularly in systems requiring consistent families of related objects. It promotes decoupling between the client code and the specific implementations of the products, allowing for greater flexibility and extensibility. At its core, the Abstract Factory acts as a factory for factories, enabling the creation of specialized factories tailored to produce specific types of related objects, all while maintaining a clear separation from their concrete implementations. This abstraction simplifies management and enhances flexibility in software design.

#### Key Components:

- **Abstract Factory**: Defines methods for creating abstract products.
- **Concrete Factories**: Implement the abstract factory interface to create specific product families.
- **Abstract Products**: Interfaces or abstract classes that define product types.
- **Concrete Products**: Classes that implement the abstract product interfaces.

#### When to Use:

- When you need to manage multiple families of related products.
- To ensure that products created are compatible and consistent.
- To encapsulate object creation logic and improve code maintainability.
- When expecting future variations or extensions in product families.

#### Benefits:

- Centralizes object creation, enhancing code organization.
- Supports flexibility and easier integration of new products.
- Reduces dependencies on concrete implementations, aiding maintainability.

#### Drawbacks:

- Can introduce complexity and increase code size.
- May make debugging more challenging due to added layers of abstraction.
- Might limit control over specific product creation logic in some scenarios.
