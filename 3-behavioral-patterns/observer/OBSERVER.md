# OBSERVER PATTERN

## What is the Observer design pattern?

The Observer pattern is a fundamental design pattern used in software development, particularly in scenarios where an object (the subject) needs to notify multiple other objects (the observers) about changes in its state. It promotes a loose coupling between the subject and the observers, which enhances flexibility and scalability in your code.

### Key Concepts of the Observer Pattern

1. **Subject**: This is the object being observed. It maintains a list of observers and provides methods to add, remove, and notify them of any changes in state.

2. **Observer**: This is an interface or abstract class that defines a method for receiving updates from the subject.

3. **Concrete Observer**: These are specific implementations of the observer interface that react to the notifications sent by the subject.

4. **Loose Coupling**: The subject and observers are loosely coupled, meaning that changes in one do not require changes in the other. This makes the system more maintainable.

### When to Use the Observer Pattern

- When an object (the subject) needs to notify other objects (observers) about changes to its state without knowing who those observers are.
- When you want to create a subscription model where multiple observers can subscribe to and receive updates from a subject.

### Example

Here is a simple example:

```typescript
// Observer Interface
interface Observer {
  update(data: any): void;
}

// Subject Class
class WeatherStation {
  private observers: Observer[] = [];
  private temperature: number = 0;

  // Method to add an observer
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  // Method to remove an observer
  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Method to notify all observers
  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  // Method to set temperature and notify observers
  setTemperature(newTemperature: number): void {
    this.temperature = newTemperature;
    this.notifyObservers();
  }
}

// Concrete Observer
class TemperatureDisplay implements Observer {
  update(data: any): void {
    console.log(`Temperature updated: ${data}°C`);
  }
}

// Another Concrete Observer
class Fan implements Observer {
  update(data: any): void {
    if (data > 25) {
      console.log('Fan: Turning ON');
    } else {
      console.log('Fan: Turning OFF');
    }
  }
}

// Usage
const weatherStation = new WeatherStation();
const temperatureDisplay = new TemperatureDisplay();
const fan = new Fan();

weatherStation.addObserver(temperatureDisplay);
weatherStation.addObserver(fan);

// Simulating temperature changes
weatherStation.setTemperature(22);
weatherStation.setTemperature(28);
```

### Explanation of the Code

1. **Observer Interface**: Defines a method `update` that all observers must implement.

2. **WeatherStation Class**: Acts as the subject. It manages a list of observers and includes methods to add, remove, and notify them of updates.

3. **Concrete Observers**: `TemperatureDisplay` simply logs the updated temperature, while `Fan` reacts based on the temperature.

4. **Usage**: We create a `WeatherStation`, two observers, and then simulate temperature changes. The observers get notified and react accordingly.

### Summary

The Observer pattern is a powerful way to handle events and notifications between objects in a decoupled manner. You can create flexible systems that are easier to maintain and extend.
