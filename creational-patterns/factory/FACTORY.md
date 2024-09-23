# FACTORY PATTERN

## What is the factory pattern?

The factory pattern is a creational pattern that provides a template that can be used to create objects.
It is used in complex situations where the type of the object required varies and needs to be specified in each case.
It does not use the `new` keyword directly to instantiate objects. This means it does not explicitly require the use of a constructor to create objects. Instead, it provides a generic interface that delegates the object creation responsibility to the corresponding subclass.

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

### When to use the factory pattern?

These are a few examples of when one can use the factory pattern

- When the type of objects required cannot be anticipated beforehand
- When multiple objects that share similar characteristics need to be created
- When you want to generalize the object instantiation process since the object set up is complex in nature

### Summary

- The Factory Pattern defers the creation of the final object to a subclass.
- The Factory pattern is about inserting another layer/abstraction between instantiating an object and where in your code it is actually used.
- The unique factor that defines the Factory pattern, is that your project now defers the creation of objects to the subclass that the factory had delegated it to.
