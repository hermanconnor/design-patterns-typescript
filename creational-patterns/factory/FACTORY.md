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

### When to use the factory pattern?

The Factory design pattern is useful in several situations where you want to manage object creation in a flexible and maintainable way. Here are some common scenarios where you might consider using the Factory pattern:

#### 1. **Decoupling Object Creation from Usage**

- When you want to separate the logic of how objects are created from the code that uses them. This allows for changes to the creation logic without affecting client code.

#### 2. **Managing Complexity**

- When you have a complex object creation process that involves several steps, the Factory pattern can encapsulate this logic, making it easier to manage.

#### 3. **Dynamic Object Creation**

- When the type of object to be created can only be determined at runtime (e.g., based on user input or configuration). The factory can instantiate the correct class dynamically based on these parameters.

#### 4. **Multiple Implementations of an Interface**

- When you have multiple classes that implement a common interface and you want to provide a way to instantiate them based on certain conditions (like user choice).

#### 5. **Avoiding Direct Instantiation**

- When you want to avoid direct instantiation of classes using the `new` keyword. This can improve flexibility and allow for easier testing (e.g., injecting mock objects in unit tests).

#### 6. **Encapsulating Object Creation Logic**

- When object creation logic is complex or involves external resources (like databases or configuration files). The factory can centralize this logic.

#### 7. **Managing Lifecycles**

- If you need to manage the lifecycle of created objects (like initializing or cleaning up resources), a factory can handle these concerns in one place.

#### Example Scenarios

- **Game Development**: You might have different types of characters (e.g., Warrior, Mage) that need to be instantiated based on game state or player choice.
- **UI Component Libraries**: A UI framework might use a factory to create different types of buttons or dialogs based on user settings or themes.
- **Data Access Layer**: A data access factory can create different database connection objects depending on the type of database being accessed (SQL, NoSQL, etc.).

### PROS AND CONS

#### Pros

1. **Decoupling**:

   - Clients are decoupled from the concrete classes, which makes the code more flexible and easier to modify.

2. **Single Responsibility Principle**:

   - The factory is responsible for creating objects, allowing other parts of the code to focus on their own responsibilities.

3. **Flexibility and Extensibility**:

   - New types of products can be added with minimal changes to existing code. You can simply extend the factory without modifying client code.

4. **Centralized Object Creation**:

   - Object creation logic is centralized, which makes it easier to manage, especially if the process is complex.

5. **Improved Testing**:

   - The use of factories allows for easier unit testing. You can inject mock objects or stubs for testing purposes without changing the client code.

6. **Encapsulation of Creation Logic**:
   - Any complex initialization logic can be encapsulated within the factory, simplifying client code.

#### Cons

1. **Increased Complexity**:

   - Introducing a factory can add a layer of abstraction, making the system more complex, especially for simple scenarios.

2. **Overhead of Factory Classes**:

   - You may end up creating many factory classes, which can lead to a bloated codebase if not managed properly.

3. **Reduced Readability**:

   - For new developers, understanding the factory pattern may require extra time to grasp how object creation is being handled.

4. **Dependency on Factory**:

   - Clients become dependent on the factory, which may lead to difficulties if you need to change the creation logic significantly.

5. **Potential for Over-Engineering**:
   - In simple scenarios, using a factory may be unnecessary and can complicate the design instead of simplifying it.

### Example

```ts
interface Product {
  name: string;
}

class ConcreteProduct implements Product {
  constructor() {}

  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductC';
  }
}

class Creator {
  constructor() {}

  static createProduct(someProperty: string): Product {
    if (someProperty.toLowerCase() === 'a') {
      return new ConcreteProductA();
    } else if (someProperty.toLowerCase() === 'b') {
      return new ConcreteProductB();
    } else {
      return new ConcreteProductC();
    }
  }
}

// THE CLIENT
const productA = Creator.createProduct('a');
const productB = Creator.createProduct('b');
const productC = Creator.createProduct('c');

console.log(productA);
console.log(productB);
console.log(productC);
```

In the above example, the client wants an object named `b`.
Instead of creating `b` directly in the client, it asks the creator (factory) for the object instead.

The factory finds the relevant class using some kind of logic from the attributes of the request. It then asks the subclass to instantiate the new object that it then returns as a reference back to the client asking for it.

### Key Takeaways

- The Factory Pattern helps abstract the instantiation process, making it easier to manage and extend.
- It promotes loose coupling, allowing you to change the instantiation logic without modifying client code.
- You can easily introduce new product types by creating new concrete factories and products.

### Summary

The Factory design pattern is powerful and versatile, offering significant benefits in terms of flexibility, maintainability, and testing. However, it can also introduce complexity and overhead, so it's important to evaluate whether its advantages outweigh its disadvantages for your specific use case. If you’re dealing with a project that involves multiple types of objects with complex creation logic, it’s often worth using. For simpler projects, it might be more straightforward to use direct instantiation.

Overall, the Factory pattern is particularly useful when you want to enhance code maintainability, scalability, and flexibility in object creation. If you anticipate changes in the types of objects your application will need or want to simplify the instantiation process, the Factory pattern is a solid choice.
