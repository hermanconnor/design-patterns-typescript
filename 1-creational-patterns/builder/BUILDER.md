# BUILDER PATTERN

## What is the Builder design pattern?

The Builder pattern is a creational design pattern that allows you to construct complex objects step by step. It can help separate the construction of a complex object from its representation, enabling you to create different representations of the same type of object.

### Key Concepts

1. **Product**: This is the complex object you want to build. For example, a `Car` that has properties like wheels, engine type, and color.

2. **Builder**: This is an interface or abstract class that defines methods for setting various parts of the product. For example, `setWheels`, `setEngine`, and `setColor`.

3. **Concrete Builder**: This is a specific implementation of the Builder interface. It builds the actual product (like a `SportsCarBuilder`).

4. **Director (optional)**: This is a class that uses the builder to construct the product in a specific sequence. It provides a higher-level way to build the object. You can think of it as a recipe that tells you how to make the dish step by step.

   **Optional Director**:

   - The pattern can include a **Director** that controls the construction process. The Director encapsulates the steps required to create specific configurations of the object, ensuring that the construction sequence is followed.
   - **Using a Director**: This is beneficial when you have predefined ways of constructing complex objects, providing clarity and reducing complexity for the client.
   - **Without a Director**: The client can directly use the builder to create objects. This approach offers greater flexibility but requires the client to manage the construction logic, which can lead to more complex code if there are many configurations.

5. **Client**: This is the code that uses the builder (with or without the director) to create the product.

### When to Use the Builder Pattern

- When you need to create complex objects with many optional parameters.
- When you want to control the construction process of an object in a flexible manner.
- When an object's construction requires multiple steps that can be combined in different ways.

### Example without a Director

```typescript
// Step 1: Define the Product
class User {
  constructor(
    public readonly username: string,
    public readonly email?: string,
    public readonly phone?: string,
    public readonly address?: string,
  ) {}
}

// Step 2: Define the Builder Interface
interface UserBuilder {
  setUsername(username: string): this;
  setEmail(email: string): this;
  setPhone(phone: string): this;
  setAddress(address: string): this;
  build(): User;
}

// Step 3: Implement the Concrete Builder
class ConcreteUserBuilder implements UserBuilder {
  private username: string;
  private email?: string;
  private phone?: string;
  private address?: string;

  setUsername(username: string): this {
    this.username = username;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  setPhone(phone: string): this {
    this.phone = phone;
    return this;
  }

  setAddress(address: string): this {
    this.address = address;
    return this;
  }

  build(): User {
    return new User(this.username, this.email, this.phone, this.address);
  }
}

// Step 4: Use the Builder
const userBuilder = new ConcreteUserBuilder();
const user = userBuilder
  .setUsername('john_doe')
  .setEmail('john.doe@example.com')
  .setPhone('123-456-7890')
  .setAddress('123 Main St, Anytown, USA')
  .build();

console.log(user);
```

### Example with a Director

Here’s how you could add a Director to the previous example:

```typescript
class User {
  constructor(
    public readonly username: string,
    public readonly email?: string,
    public readonly phone?: string,
    public readonly address?: string,
  ) {}
}

interface UserBuilder {
  setUsername(username: string): this;
  setEmail(email: string): this;
  setPhone(phone: string): this;
  setAddress(address: string): this;
  build(): User;
}

class ConcreteUserBuilder implements UserBuilder {
  private username: string = '';
  private email?: string;
  private phone?: string;
  private address?: string;

  setUsername(username: string): this {
    this.username = username;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  setPhone(phone: string): this {
    this.phone = phone;
    return this;
  }

  setAddress(address: string): this {
    this.address = address;
    return this;
  }

  build(): User {
    return new User(this.username, this.email, this.phone, this.address);
  }
}

// Director Class
class UserDirector {
  private builder: UserBuilder;

  constructor(builder: UserBuilder) {
    this.builder = builder;
  }

  constructBasicUser(username: string): User {
    return this.builder.setUsername(username).build();
  }

  constructFullUser(
    username: string,
    email: string,
    phone: string,
    address: string,
  ): User {
    return this.builder
      .setUsername(username)
      .setEmail(email)
      .setPhone(phone)
      .setAddress(address)
      .build();
  }
}

// Using the Director
const userBuilder = new ConcreteUserBuilder();
const userDirector = new UserDirector(userBuilder);

// Construct a basic user
const basicUser = userDirector.constructBasicUser('jane_doe');
console.log(basicUser);

// Construct a full user
const fullUser = userDirector.constructFullUser(
  'john_smith',
  'john.smith@example.com',
  '987-654-3210',
  '456 Elm St, Othertown, USA',
);

console.log(fullUser);
```

### When to Use a Director:

- **Complex Construction**: If the object requires a specific sequence of steps or involves multiple configurations, a Director can simplify the process for the client.
- **Clarity**: Using a Director can make the intent of the construction clearer, as it provides predefined methods for building specific types of objects.

### When to Omit the Director:

- **Simplicity**: If the construction process is straightforward and doesn't require a strict sequence, you can skip the Director and let the client handle the construction directly.
- **Flexibility**: If you want the client to have more control over the construction process or if different configurations can vary significantly, not using a Director can provide that flexibility.

In essence, it’s a design choice based on your specific needs. If you find that the Director adds unnecessary complexity for your use case, it’s perfectly fine to omit it.

### Advantages

- Provides a clear separation between the construction and representation of an object.
- Supports complex construction logic and allows for easy modification of the construction process.
- Promotes immutability of constructed objects by allowing them to be built in a step-by-step manner.

### Disadvantages

- Can lead to an increase in the number of classes, especially if many products are built.
- The construction process can become complicated if too many steps are required.

### Summary

The Builder pattern is an effective solution for constructing complex objects step by step, promoting clarity and flexibility in the creation process. By separating the construction logic from the representation, it allows for easier management and maintenance of code.
