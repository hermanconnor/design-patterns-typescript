# PROTOTYPE PATTERN

## What is the Prototype pattern?

The Prototype design pattern is a creational pattern that allows you to create new objects by copying an existing object, known as the prototype. This can be useful when the cost of creating a new instance of an object is more expensive than copying an existing one.

### Key Concepts

1. **Prototype**: The original object that will be cloned.
2. **Cloning**: Creating a new object by copying the prototype.
3. **Inheritance**: Prototypes can be extended to create new types.

### Benefits

- **Performance**: Cloning can be faster than creating an object from scratch, especially when initializing involves complex setup.
- **Dynamic Creation**: You can create new types dynamically at runtime.
- **Reduced Dependencies**: Reduces the need for concrete classes.

### Considerations

- **Shallow vs. Deep Cloning**: If your objects contain nested objects, you'll need to ensure you perform deep cloning to avoid shared references.

### Example

```typescript
interface IPrototype {
  clone(deep?: boolean): this; // Option for deep or shallow clone
}

class MyClass implements IPrototype {
  field: number[];

  constructor(field: number[]) {
    this.field = field;
  }

  // Shallow clone
  private shallowClone(): this {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  // Deep clone
  private deepClone(): this {
    return structuredClone(this);
  }

  // Public clone method
  clone(deep: boolean = false): this {
    return deep ? this.deepClone() : this.shallowClone();
  }
}

// The Client
const OBJECT1 = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);

const OBJECT2 = OBJECT1.clone(true); // Use deep clone. Creates a deep copy of OBJECT1.
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);

OBJECT2.field[1] = 101; // The second element of the field array in OBJECT2 is changed to 101

// Comparing OBJECT1 and OBJECT2
console.log();
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`); // Since OBJECT2 was a deep copy, modifying its field does not affect OBJECT1.
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);
```

### Summary

The Prototype pattern is useful for reducing the overhead of object creation, especially in cases where creating an instance from scratch is costly. By cloning, we can create new objects quickly based on existing ones.
