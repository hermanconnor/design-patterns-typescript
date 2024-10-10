# INTERPRETER PATTERN

## What is the Interpreter design pattern?

The Interpreter design pattern is a behavioral design pattern that is used to define a grammar for a language and provide an interpreter to evaluate sentences in that language. It’s particularly useful for designing domain-specific languages (DSLs) or situations where you want to evaluate simple expressions.

### Key Concepts of the Interpreter Pattern

1. **AbstractExpression**: An interface that declares an `interpret` method that will be implemented by concrete expressions.

2. **TerminalExpression**: A class that implements the `AbstractExpression` interface and represents the terminal symbols of the grammar.

3. **NonTerminalExpression**: A class that implements the `AbstractExpression` interface and represents the non-terminal symbols of the grammar. It usually involves one or more expressions.

4. **Context**: This is an optional class that holds the context information that the interpreter needs to interpret the expressions.

### When to Use the Interpreter Pattern

- When you have a language to interpret and you can define a grammar for it.
- When you need to evaluate expressions frequently and want to avoid repeated logic.
- When you want to allow users to define their own expressions using a simplified syntax.

### Example

Here's an example of a simple arithmetic expression interpreter that allows for addition and subtraction of integers.

#### Step 1: Define the AbstractExpression

```typescript
interface Expression {
  interpret(context: Map<string, number>): number;
}
```

#### Step 2: Create Terminal Expressions

These expressions will represent numbers.

```typescript
class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  interpret(context: Map<string, number>): number {
    return this.number;
  }
}
```

#### Step 3: Create NonTerminal Expressions

These expressions will represent operations (addition and subtraction).

```typescript
class AdditionExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(context: Map<string, number>): number {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

class SubtractionExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(context: Map<string, number>): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}
```

#### Step 4: Context (Optional)

For this simple example, we won't use a context, but you could expand this part if you need variable support.

#### Step 5: Putting It All Together

```typescript
class Interpreter {
  private expression: Expression;

  constructor(expression: Expression) {
    this.expression = expression;
  }

  evaluate(context: Map<string, number>): number {
    return this.expression.interpret(context);
  }
}
```

#### Step 6: Usage Example

Here's how you might use the above classes to interpret a simple expression like "3 + 5 - 2":

```typescript
const three = new NumberExpression(3);
const five = new NumberExpression(5);
const two = new NumberExpression(2);

const addition = new AdditionExpression(three, five);
const subtraction = new SubtractionExpression(addition, two);

const interpreter = new Interpreter(subtraction);
const result = interpreter.evaluate(new Map());

console.log(result); // Output: 6
```

### Summary

The Interpreter pattern is useful for situations where you need to evaluate expressions defined by a specific grammar. By defining terminal and non-terminal expressions, you can build a structure that allows for complex expressions while keeping the logic clear and organized.
