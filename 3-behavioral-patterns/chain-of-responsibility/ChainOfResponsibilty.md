# CHAIN OF RESPONSIBILITY PATTERN

# What is the Chain of Responsibility pattern?

The Chain of Responsibility (CoR) is a behavioral design pattern that allows a request to be passed along a chain of potential handlers until one of them processes it. This pattern decouples the sender of a request from its receivers, allowing for flexible and dynamic request handling.

### Key Concepts

1. **Handler Interface**: Defines a method for processing requests and a way to set the next handler in the chain.

2. **Concrete Handlers**: These implement the handler interface and contain the logic for processing specific requests. Each handler can either handle the request or pass it along the chain.

3. **Client**: The client sends requests to the chain of handlers.

### When to Use the Chain of Responsibility Pattern

- When you want to avoid coupling the sender to a specific receiver.
- When multiple handlers can handle a request, but you don’t know which one will.
- When you want to add or modify handlers without affecting the client code.

### Example

Here's a simple example:

```typescript
// Handler Interface
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

// Base Handler Class
abstract class BaseHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

// Concrete Handlers
class BillingHandler extends BaseHandler {
  handle(request: string): string | null {
    if (request === 'billing') {
      return 'Handling billing issue.';
    }

    return super.handle(request);
  }
}

class TechnicalSupportHandler extends BaseHandler {
  handle(request: string): string | null {
    if (request === 'technical') {
      return 'Handling technical support issue.';
    }

    return super.handle(request);
  }
}

class GeneralInquiryHandler extends BaseHandler {
  handle(request: string): string | null {
    if (request === 'general') {
      return 'Handling general inquiry.';
    }

    return super.handle(request);
  }
}

// Client Code
const billingHandler = new BillingHandler();
const techSupportHandler = new TechnicalSupportHandler();
const generalInquiryHandler = new GeneralInquiryHandler();

// Setting up the chain
billingHandler.setNext(techSupportHandler).setNext(generalInquiryHandler);

// Example Requests
const requests = ['billing', 'technical', 'general', 'unknown'];

requests.forEach((request) => {
  const response = billingHandler.handle(request);

  console.log(
    `Request: ${request} -> Response: ${response || 'No handler found.'}`,
  );
});
```

#### Explanation of the above code

1. **Handler Interface**: Defines methods for setting the next handler and handling requests.

2. **BaseHandler Class**: Implements the basic functionality of storing the next handler and passing requests along.

3. **Concrete Handlers**: Each specific handler (e.g., `BillingHandler`, `TechnicalSupportHandler`, `GeneralInquiryHandler`) overrides the `handle` method to provide specific logic for request handling.

4. **Client Code**: Sets up the chain of handlers and sends various requests to see which handler processes them.

### Benefits

- **Decoupling**: The sender of a request doesn't need to know which handler will process it.
- **Flexibility**: You can add or remove handlers dynamically at runtime.
- **Single Responsibility**: Each handler has a single responsibility and can focus on its specific type of request.

### Summary

The Chain of Responsibility pattern is a powerful way to manage request handling in a flexible manner. By allowing multiple handlers to process a request, you can create a system that is easy to extend and maintain.
