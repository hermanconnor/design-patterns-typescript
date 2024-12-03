# Method Overloading

Method overloading is a feature in object-oriented programming (OOP) that allows a class to have multiple methods with the same name but different parameter lists. This enables methods to perform similar tasks with different types or numbers of parameters, enhancing the flexibility and readability of the code.

### Key Concepts of Method Overloading

1. **Same Method Name**: All overloaded methods share the same name.

2. **Different Signatures**: Overloaded methods must differ in their parameter types, number of parameters, or both. The method signature is composed of the method name and its parameter list.

3. **Return Type**: The return type alone is not sufficient to differentiate overloaded methods. They must differ in parameters.

4. **Compile-Time Polymorphism**: Method overloading is resolved at compile time, meaning the method to be executed is determined based on the method signature at the time of the method call.

### Example

Here is an example demonstrating method overloading in TypeScript:

```typescript
class Calculator {
  // Overloaded methods
  public add(a: number, b: number): number; // Signature 1
  public add(a: string, b: string): string; // Signature 2
  public add(a: number, b: number, c: number): number; // Signature 3

  public add(
    a: number | string,
    b: number | string,
    c?: number,
  ): number | string {
    if (typeof a === 'string' && typeof b === 'string') {
      return a + b; // Concatenate strings
    } else if (typeof a === 'number' && typeof b === 'number') {
      if (c !== undefined) {
        return a + b + c; // Add all three numbers if c is provided
      }
      return a + b; // Add the two numbers
    } else {
      throw new Error('Invalid arguments');
    }
  }
}

// Using the Calculator class
const calculator = new Calculator();

console.log(calculator.add(5, 10)); // Output: 15
console.log(calculator.add(5, 10, 20)); // Output: 35
console.log(calculator.add('Hello, ', 'World!')); // Output: Hello, World!

// The following line would throw an error
// console.log(calculator.add(5, "test"));          // Error: Invalid arguments
```

### Explanation of the Example

1. **Class Definition (Calculator)**: The `Calculator` class contains overloaded `add()` methods.

2. **Method Signatures**:

   - The first overload allows two `number` parameters.
   - The second overload allows two `string` parameters.
   - The third overload allows three `number` parameters.

3. **Implementation**:

   - The implementation of `add()` uses a single method that checks the types of the arguments to determine the appropriate operation.
   - If both arguments are numbers, it can either add two or three numbers depending on the parameters provided.
   - If both arguments are strings, it concatenates them.

4. **Error Handling**: If the arguments do not match any valid overload, it throws an error, ensuring that the user is informed of incorrect usage.

### Key Considerations

- **Implementation Must Cover All Overloads**: The single implementation must be able to handle all defined overloads and must include type checks or conditional logic as needed.

- **Clarity vs. Complexity**: While overloading can enhance clarity, excessive use can make the code harder to understand. It's essential to balance between convenience and maintainability.

### Conclusion

In TypeScript, method overloading allows you to define multiple methods with the same name but different parameter lists. This leads to more intuitive and flexible code, enabling methods to handle a variety of data types and argument configurations.
