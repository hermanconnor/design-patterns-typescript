# PROXY PATTERN

## What is the Proxy design pattern?

The Proxy design pattern is a structural design pattern that provides an object representing another object. The proxy acts as an intermediary, controlling access to the target object, which can be useful for various purposes such as lazy loading, access control, logging, or monitoring.

### Key Concepts of Proxy Design Pattern

1. **Subject Interface**: This is an interface that both the Real Subject and Proxy implement. It defines the operations that can be performed.

2. **Real Subject**: This is the actual object that performs the real operations. It implements the Subject interface.

3. **Proxy**: This class also implements the Subject interface and holds a reference to the Real Subject. It can add additional functionality before or after delegating calls to the Real Subject.

### Types of Proxies

1. **Virtual Proxy**: Delays the creation of a resource-intensive object until it is needed.
2. **Remote Proxy**: Represents an object that is in a different address space (e.g., on a different server).
3. **Protection Proxy**: Controls access to the Real Subject based on access rights.

### When to Use the Proxy Pattern

- When you need to control access to an object.
- When you want to perform additional operations when accessing an object (like logging).
- When you want to defer the creation of an expensive object.

### Example

Here is a simple example of a virtual proxy that loads images. The proxy will delay loading the actual image until it is requested.

#### Step 1: Define the Subject Interface

```typescript
interface IImage {
  display(): void;
}
```

#### Step 2: Implement the Real Subject

```typescript
class RealImage implements IImage {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadImageFromDisk();
  }

  private loadImageFromDisk(): void {
    console.log(`Loading image: ${this.filename}`);
  }

  public display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}
```

#### Step 3: Implement the Proxy

```typescript
class ProxyImage implements IImage {
  private realImage: RealImage | null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.realImage = null;
  }

  public display(): void {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}
```

#### Step 4: Using the Proxy

```typescript
function clientCode(image: IImage): void {
  // The first call will load the image from disk
  image.display();
  // Subsequent calls will use the cached image
  image.display();
}

// Example Usage
const image1: IImage = new ProxyImage('photo1.jpg');
clientCode(image1); // Loading image on first call, displaying on second
```

### Explanation of the code above

1. **Subject Interface**: The `IImage` interface defines the `display` method.
2. **Real Subject**: The `RealImage` class implements the `IImage` interface and loads the image from disk when constructed.
3. **Proxy**: The `ProxyImage` class holds a reference to the `RealImage` but only creates it when `display` is called for the first time.
4. **Client Code**: Demonstrates using the proxy, showing how the real image is only loaded when necessary.

### Benefits of Using Proxy

- **Lazy Loading**: The real object is created only when needed, saving resources.
- **Control Access**: The proxy can enforce access rules.
- **Separation of Concerns**: It can handle cross-cutting concerns like logging and security separately from the business logic.

### Summary

The Proxy Design Pattern is a powerful tool for managing object interactions in a flexible and controlled manner. Understanding and implementing it can greatly enhance the architecture of your applications, especially when dealing with resource-intensive or access-controlled objects.
