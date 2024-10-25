# FACADE PATTERN

## What is the Facade Pattern?

The Facade pattern is a structural design pattern that provides a simplified interface to a complex subsystem. It's useful for hiding the complexities of a system and exposing a more straightforward interface.

### Key Concepts

1. **Facade**: This class provides a simplified interface that clients can use to interact with the subsystem. It delegates calls to the appropriate classes in the subsystem.

2. **Subsystem Classes**: These are the classes that implement the actual functionality of the system. They can be complex and may have intricate interactions.

### When to use

- When you want to provide a simple interface to a complex system.
- When you want to reduce dependencies on external code.
- When you want to provide a higher-level interface that makes the subsystem easier to use.

### Example

Here is a simple example:

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

### Summary

The Facade design pattern simplifies interactions with a complex system by providing a single interface that encapsulates the complexities of the subsystem. This can make your code cleaner, easier to read, and maintain.
