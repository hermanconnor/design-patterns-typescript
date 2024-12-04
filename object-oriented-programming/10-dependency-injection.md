# Dependency Injection

Dependency Injection (DI) is when an object receives its dependencies from an external source rather than creating them itself.

### Key Concepts of Dependency Injection

1. **Dependencies**: In software, a dependency is any object that another object needs to function. For example, if a class `Car` uses an engine, then the engine is a dependency of the car.

2. **Injection**: The process of providing the dependencies to a class. This can be done through various methods:

   - **Constructor Injection**: Dependencies are provided through a class constructor.
   - **Setter Injection**: Dependencies are provided through setter methods.
   - **Interface Injection**: The dependency provides an injector method that will inject the dependency into any client that passes itself to the injector.

3. **Decoupling**: By using DI, classes are decoupled from their dependencies, making it easier to change, replace, or mock dependencies without affecting the class that uses them.

### Example

Here's an example of dependency injection with a simple example of a `Car` class that depends on an `Engine` class.

#### Step 1: Define the Dependency (Engine)

```typescript
class Engine {
  public start(): string {
    return 'Engine started.';
  }
}
```

#### Step 2: Define the Dependent Class (Car)

```typescript
class Car {
  private engine: Engine;

  // Constructor Injection
  constructor(engine: Engine) {
    this.engine = engine;
  }

  public drive(): string {
    return this.engine.start() + ' Car is driving.';
  }
}
```

#### Step 3: Use Dependency Injection

```typescript
// Create an instance of the dependency
const engine = new Engine();

// Inject the dependency into the Car class
const myCar = new Car(engine);

// Use the Car instance
console.log(myCar.drive()); // Output: Engine started. Car is driving.
```

### Explanation of the Example

1. **Dependency Class (Engine)**:

   - The `Engine` class has a method `start()` that returns a string indicating that the engine has started.

2. **Dependent Class (Car)**:

   - The `Car` class has a constructor that takes an `Engine` instance as a parameter. This is an example of **constructor injection**.
   - The `drive()` method uses the injected `engine` to start the engine and return a driving message.

3. **Dependency Injection in Action**:
   - An instance of `Engine` is created and passed to the `Car` constructor. The `Car` does not create the `Engine` itself, demonstrating decoupling.

### Alternative Injection Methods

1. **Setter Injection**:

You can also use setter methods to inject dependencies:

```typescript
class Engine {
  public start(): string {
    return 'Engine started.';
  }
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine();
  }

  public setEngine(engine: Engine): void {
    this.engine = engine;
  }

  public drive(): string {
    return this.engine.start() + ' Car is driving.';
  }
}

// Usage
const myCar = new Car();
const engine = new Engine();
myCar.setEngine(engine); // This will still work
console.log(myCar.drive());
```

2. **Interface Injection**: Can be implemented by defining an interface that includes methods for injecting dependencies.

Here’s an example demonstrating interface injection :

### 1. Define the Interface for Injection

```typescript
// ICarEngine interface defines the method for providing the engine dependency
interface ICarEngine {
  startEngine(): void;
}
```

### 2. Implement the Interface in the Dependent Class

```typescript
// Car class depends on an engine (ICarEngine)
class Car {
  private engine: ICarEngine;

  constructor(engine: ICarEngine) {
    this.engine = engine;
  }

  // Method to start the car which uses the engine dependency
  start() {
    this.engine.startEngine();
    console.log('Car started!');
  }
}
```

### 3. Create Concrete Implementations of the Interface

```typescript
// A simple implementation of ICarEngine
class V8Engine implements ICarEngine {
  startEngine() {
    console.log('V8 engine started');
  }
}

class ElectricEngine implements ICarEngine {
  startEngine() {
    console.log('Electric engine started');
  }
}
```

### 4. Use the Interface to Inject Dependencies

```typescript
// Client code that uses the Car and injects the correct engine
const v8Engine = new V8Engine();
const electricEngine = new ElectricEngine();

// Inject V8 Engine into Car
const myCarWithV8 = new Car(v8Engine);
myCarWithV8.start(); // Output: V8 engine started, Car started!

// Inject Electric Engine into Car
const myCarWithElectricEngine = new Car(electricEngine);
myCarWithElectricEngine.start(); // Output: Electric engine started, Car started!
```

### Explanation:

- `ICarEngine` is the interface that defines the method `startEngine()`, which will be used to inject the engine behavior into the `Car` class.
- The `Car` class depends on `ICarEngine`, and through the constructor, you inject the engine dependency.
- `V8Engine` and `ElectricEngine` are two concrete implementations of `ICarEngine`. You can inject any class that implements this interface into the `Car` class, allowing flexibility and easier testing.

### Conclusion

Dependency Injection enhances the flexibility and maintainability of code by decoupling classes from their dependencies. By using DI, you can easily manage and swap out dependencies, making your application more modular and easier to test.
