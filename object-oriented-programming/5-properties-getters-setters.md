# Properties, Getters, and Setters

In TypeScript (and many other object-oriented programming languages), properties, getters, and setters are essential components of classes that help manage and encapsulate data. They provide a way to control access to class fields while allowing you to implement additional logic during property access or modification.

## Properties

Properties in a class are variables that hold data related to the object. They can be defined with different access modifiers (`public`, `private`, `protected`) to control visibility and access.

#### Characteristics of Properties

1. **Data Storage**: Properties store the state of an object.
2. **Access Modifiers**: Use access modifiers to restrict visibility:
   - `public`: Accessible from anywhere.
   - `private`: Accessible only within the class.
   - `protected`: Accessible within the class and subclasses.
3. **Initialization**: Properties can be initialized directly, through constructors, or using class methods.

### Example

Here’s an example of defining properties:

```typescript
class Person {
  public name: string; // Public property
  private age: number; // Private property

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getAge(): number {
    return this.age; // Method to access private property
  }
}

const person = new Person('Alice', 30);
console.log(person.name); // Output: Alice
// console.log(person.age); // Error: Property 'age' is private.
console.log(person.getAge()); // Output: 30
```

## Getters and Setters

Getters and setters are special methods that provide controlled access to properties. Getters are used to retrieve property values, while setters are used to modify them. They can contain additional logic, such as validation or transformation.

#### Characteristics of Getters and Setters

1. **Encapsulation**: They allow you to hide the internal representation of the data, providing a controlled interface.
2. **Validation**: Setters can include validation logic to ensure that only valid data is assigned to a property.
3. **Computed Properties**: Getters can return computed values based on other properties.

### Example

Here’s an example illustrating how to use getters and setters

```typescript
class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Getter for firstName
  get firstName(): string {
    return this._firstName;
  }

  // Setter for firstName
  set firstName(name: string) {
    if (!name || name.length < 3) {
      console.log('First name must be at least 3 characters long.');
    } else {
      this._firstName = name;
    }
  }

  // Getter for lastName
  get lastName(): string {
    return this._lastName;
  }

  // Setter for lastName
  set lastName(name: string) {
    this._lastName = name;
  }

  // Getter for age
  get age(): number {
    return this._age;
  }

  // Setter for age
  set age(age: number) {
    if (age < 0 || age > 150) {
      console.log('Age must be between 0 and 150.');
    } else {
      this._age = age;
    }
  }

  // Method to display full name
  getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

// Create a new Person object
let person = new Person('Jason', 'Bourne', 30);

// Accessing properties using getters
console.log(person.firstName); // Jason
console.log(person.lastName); // Bourne
console.log(person.age); // 30

// Using setters to modify properties
person.firstName = 'Ja'; // This will show an error message (less than 3 characters)
person.firstName = 'Jane'; // Successfully updates the first name

person.age = 200; // This will show an error message (invalid age)
person.age = 25; // Successfully updates the age

// Accessing the updated full name
console.log(person.getFullName()); // Jane Bourne
```

### Explanation:

1. **Private Properties:** In the `Person` class, we use private properties (`_firstName`, `_lastName`, and `_age`) to encapsulate the data. This is a good practice in OOP to protect data integrity.

2. **Getters:**
   - Getters allow you to retrieve the value of a property in a controlled manner. For instance, `get firstName()` allows you to access `_firstName`.
3. **Setters:**

   - Setters are used to assign values to properties. You can add custom logic to validate or manipulate data before assigning it. For example, the `firstName` setter ensures that the name has at least 3 characters before it’s set.
   - Assigning a value to `person.firstName` invokes the setter, which can enforce validation rules.

4. **Error Handling:** In the setter for `firstName`, if the provided name is too short, a message is logged. Similarly, the setter for `age` checks that the age is within a reasonable range (0 to 150 years).

### Benefits:

- **Encapsulation:** We control how properties are accessed and modified, preventing invalid values from being set.
- **Validation:** We can validate data before setting it (e.g., ensuring the age is a reasonable value).
- **Consistency:** Getters and setters allow us to implement any necessary logic in one place, ensuring consistent behavior.

### Conclusion

Properties, getters, and setters are fundamental concepts that facilitate data encapsulation, validation, and controlled access to class fields. By using these features, you can create robust and maintainable classes that expose a clean interface while managing the internal state effectively.
