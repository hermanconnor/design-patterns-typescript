# Builder Pattern

## What is the Builder pattern?

The Builder Pattern is a creational design pattern that allows you to construct complex objects step by step. It can help separate the construction of a complex object from its representation, enabling you to create different representations of the same type of object.

It’s particularly useful when:

- The object you're creating has many properties or configurations.
- You want to avoid having a huge constructor with many parameters.
- You want to create different representations of the same type of object.

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

### How It Works

1. **Define the Product**: Start by creating the object that you want to build.

2. **Create a Builder Interface**: Define methods for setting properties of the product.

3. **Implement the Builder**: Create a concrete builder that implements the builder interface. This builder will keep track of the product being built.

4. **Use the Builder**: You can use the builder directly or through a director to construct the product step by step.

### Example in Everyday Terms

Imagine you're building a sandwich:

1. **Product**: The sandwich itself, which has bread, filling, and toppings.

2. **Builder Interface**: Methods like `addBread`, `addFilling`, and `addToppings`.

3. **Concrete Builder**: A specific builder for a "Club Sandwich" that knows how to stack the ingredients properly.

4. **Director**: A chef who knows the right order to add the ingredients (e.g., bread, filling, then toppings).

5. **Client**: You, the customer, who asks for a sandwich. You could either ask the chef (director) to make it for you or just tell the builder what you want.

### Advantages

- **Flexibility**: You can create different variations of the product without changing the code that uses the builder.
- **Readability**: The code for building the product is clearer and more manageable.
- **Separation of Concerns**: The construction logic is separated from the product’s representation.

### Example without a Director

1. **Builder Interface**: Defines the methods for creating parts of the product.
2. **Concrete Builder**: Implements the builder interface and provides methods for building specific parts of the product.
3. **Director**: Controls the construction process, using the builder to create the product.
4. **Product**: The complex object being built.

```typescript
// Step 1: Define the Product
class User {
  constructor(
    public username: string,
    public email?: string,
    public phone?: string,
    public address?: string,
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
    public username: string,
    public email?: string,
    public phone?: string,
    public address?: string,
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
