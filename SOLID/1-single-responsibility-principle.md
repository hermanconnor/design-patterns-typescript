# Single Responsibility Principle (SRP)

The **Single Responsibility Principle (SRP)** states that a class should have only one reason to change, meaning it should have only one responsibility or job. This principle helps to keep your code organized and makes it easier to maintain.

### Key Concept

1. **Single Responsibility**: Each class should encapsulate a single piece of functionality. If a class has multiple responsibilities, it becomes more complex and harder to maintain.
2. **Reasons to Change**: If a class is responsible for multiple functionalities, a change in one aspect could affect the other functionalities, leading to potential bugs or side effects.

### Example

#### Violating the SRP

For example, we have a class that handles user management and also manages notifications. This violates the SRP because it has multiple responsibilities.

```typescript
class UserManager {
  constructor(private users: string[]) {}

  addUser(user: string) {
    this.users.push(user);
    this.sendNotification(user);
  }

  removeUser(user: string) {
    this.users = this.users.filter((u) => u !== user);
    this.sendNotification(user);
  }

  private sendNotification(user: string) {
    console.log(`Notification sent to ${user}`);
  }
}

// Usage
const userManager = new UserManager(['Alice']);
userManager.addUser('Bob');
userManager.removeUser('Alice');
```

In this example, the `UserManager` class is responsible for both user management (adding and removing users) and sending notifications. If we wanted to change how notifications are sent (e.g., by email instead of a console log), we would need to modify this class, which could introduce bugs in user management.

#### Following the SRP

To adhere to the SRP, we can split this class into two separate classes: one for user management and another for notification handling.

```typescript
class UserManager {
  private users: string[];

  constructor() {
    this.users = [];
  }

  addUser(user: string) {
    this.users.push(user);
    console.log(`User added: ${user}`);
  }

  removeUser(user: string) {
    this.users = this.users.filter((u) => u !== user);
    console.log(`User removed: ${user}`);
  }
}

class NotificationService {
  sendNotification(user: string) {
    console.log(`Notification sent to ${user}`);
  }
}

// Usage
const userManager = new UserManager();
const notificationService = new NotificationService();

userManager.addUser('Bob');
notificationService.sendNotification('Bob');
userManager.removeUser('Bob');
notificationService.sendNotification('Bob');
```

### Benefits of following the SRP

1. **Easier Maintenance**: Each class has a clear responsibility, making it easier to understand and maintain.
2. **Reduced Impact of Changes**: Changes in one class (e.g., notification method) won't affect the user management functionality.
3. **Better Testing**: You can test each class independently, leading to more robust unit tests.

By adhering to the Single Responsibility Principle, your code becomes more modular, easier to manage, and less prone to errors as your application grows.
