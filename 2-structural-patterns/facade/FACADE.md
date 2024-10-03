# FACADE PATTERN

## What is the Facade Pattern?

The Facade pattern is a structural design pattern that provides a simplified interface to a complex subsystem. It's useful for hiding the complexities of a system and exposing a more straightforward interface.

### Key Concepts

1. **Purpose**: The primary goal of the Facade pattern is to provide a simple interface to a complex subsystem. This helps to reduce the dependency of the client code on the complexities of the subsystem.

2. **Use Cases**:

   - When you want to simplify interactions with a complex system.
   - When you need to reduce the number of dependencies between subsystems.
   - When you want to provide a unified interface to a set of interfaces in a subsystem.

3. **Components**:

   - **Facade**: The class that provides the simplified interface.
   - **Subsystem Classes**: The complex classes that the facade interacts with.

4. **Advantages**:

   - Simplifies the interface to a subsystem.
   - Reduces dependencies on the complex subsystem.
   - Can make the code easier to manage and maintain.

5. **Disadvantages**:
   - Might lead to a situation where the facade becomes a "god class" if not managed properly.
   - Can hide the underlying complexity, making debugging more difficult if issues arise.

### Example

Here is a simple example:

```typescript
class SubSystemClassA {
  // A hypothetically complicated class
  method(): string {
    return 'A';
  }
}

class SubSystemClassB {
  // A hypothetically complicated class
  method(value: string): string {
    return value;
  }
}

class SubSystemClassC {
  // A hypothetically complicated class
  method(value: { C: number[] }): { C: number[] } {
    return value;
  }
}

class Facade {
  // A simplified facade offering the services of subsystems
  subSystemClassA(): string {
    // Uses the subsystems method
    return new SubSystemClassA().method();
  }

  subSystemClassB(value: string): string {
    // Uses the subsystems method
    return new SubSystemClassB().method(value);
  }

  subSystemClassC(value: { C: number[] }): { C: number[] } {
    // Uses the subsystems method
    return new SubSystemClassC().method(value);
  }
}

// The Client
// Calling potentially complicated subsystems directly
console.log(new SubSystemClassA().method());
console.log(new SubSystemClassB().method('B'));
console.log(new SubSystemClassC().method({ C: [1, 2, 3] }));

// or using the simplified facade instead
const FACADE = new Facade();
console.log(FACADE.subSystemClassA());
console.log(FACADE.subSystemClassB('B'));
console.log(FACADE.subSystemClassC({ C: [1, 2, 3] }));
```

### Example 2

In this example, imagine we have a home theater system with multiple components: a `DVDPlayer`, a `Projector`, and an `Amplifier`. The `HomeTheaterFacade` will provide a simplified interface to control these components.

#### Step 1: Define Subsystem Classes

```typescript
class DVDPlayer {
  on(): void {
    console.log('DVD Player is on.');
  }

  play(movie: string): void {
    console.log(`Playing "${movie}"`);
  }

  stop(): void {
    console.log('DVD Player stopped.');
  }

  off(): void {
    console.log('DVD Player is off.');
  }
}

class Projector {
  on(): void {
    console.log('Projector is on.');
  }

  setInput(dvdPlayer: DVDPlayer): void {
    console.log('Projector input set to DVD Player.');
  }

  off(): void {
    console.log('Projector is off.');
  }
}

class Amplifier {
  on(): void {
    console.log('Amplifier is on.');
  }

  setVolume(volume: number): void {
    console.log(`Volume set to ${volume}.`);
  }

  off(): void {
    console.log('Amplifier is off.');
  }
}
```

#### Step 2: Create the Facade

```typescript
class HomeTheaterFacade {
  private dvdPlayer: DVDPlayer;
  private projector: Projector;
  private amplifier: Amplifier;

  constructor(
    dvdPlayer: DVDPlayer,
    projector: Projector,
    amplifier: Amplifier,
  ) {
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
    this.amplifier = amplifier;
  }

  watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');
    amplifier.on();
    amplifier.setVolume(5);
    projector.on();
    projector.setInput(this.dvdPlayer);
    dvdPlayer.on();
    dvdPlayer.play(movie);
  }

  endMovie(): void {
    console.log('Shutting down the movie theater...');
    dvdPlayer.stop();
    dvdPlayer.off();
    projector.off();
    amplifier.off();
  }
}
```

#### Step 3: Use the Facade

```typescript
// Client code
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const amplifier = new Amplifier();

const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, amplifier);

homeTheater.watchMovie('John Wick');
homeTheater.endMovie();
```

### When to Use

- When a system is complex and has many interacting parts.
- When you want to decouple clients from the complexities of the subsystem.
- When you need to provide a more readable and understandable interface.

### Summary

The Facade design pattern simplifies interactions with a complex system by providing a single interface that encapsulates the complexities of the subsystem. This can make your code cleaner, easier to read, and maintain.
