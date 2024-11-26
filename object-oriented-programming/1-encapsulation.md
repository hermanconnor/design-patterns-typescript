# Encapsulation

Encapsulation in object-oriented programming (OOP), refers to the bundling of data (attributes) and methods (functions) that operate on that data within a single unit, typically a class. Encapsulation can also involve restricting access to certain components of an object, which helps protect its internal state.

### Key Features of Encapsulation

1. **Access Modifiers**: Encapsulation uses access modifiers to control the visibility of class members:

   - **public**: Members are accessible from anywhere.
   - **private**: Members are only accessible within the class itself.
   - **protected**: Members are accessible within the class and its subclasses.

2. **Getter and Setter Methods**: These methods provide controlled access to private attributes. They allow you to define how properties can be accessed or modified.

### Example in TypeScript

Here’s an example of encapsulation in TypeScript:

```typescript
class BankAccount {
  // Private properties
  private balance: number;
  private accountNumber: string;

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  // Public method to get balance
  public getBalance(): number {
    return this.balance;
  }

  // Public method to deposit money
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;

      console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Deposit amount must be positive');
    }
  }

  // Public method to withdraw money
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Invalid withdrawal amount.');
    }
  }
}

// Using the BankAccount class
const myAccount = new BankAccount('123456789', 1000);

console.log(`Initial balance: $${myAccount.getBalance()}`);

myAccount.deposit(5000);

myAccount.withdraw(200);

// Trying to access private properties (will result in an error)
// console.log(myAccount.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
```

### Explanation

1. **Private Properties**: The `balance` and `accountNumber` properties are marked as `private`, which means they cannot be accessed directly from outside the `BankAccount` class. This prevents external code from modifying these properties directly, which helps maintain the integrity of the object's state.

2. **Public Methods**: The `getBalance`, `deposit`, and `withdraw` methods are public, allowing users to interact with the `BankAccount` class while still controlling how the internal state is modified.

3. **Data Validation**: The methods provide a way to validate inputs. For example, the `deposit` method checks that the amount is positive before updating the balance, and the `withdraw` method ensures that the amount is valid.

### Conclusion

Encapsulation enhances your code by protecting the internal state of objects and promoting a clear interface for interacting with them.
