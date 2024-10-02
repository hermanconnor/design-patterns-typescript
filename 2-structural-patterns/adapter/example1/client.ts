/**
 * In this example, we need to integrate a third-party payment processing library into our application. The existing library has a different interface than what our application expects.
 */

// STEP 1: Define the Target Interface
// This interface represents the payment processing methods that our application expects.
interface PaymentProcessor {
  pay(amount: number, currency: string): string;
}

// STEP 2: Create the Adaptee
// This is the third-party payment processing library that has a different interface.
class LegacyPaymentService {
  public processPayment(amountInCents: number, currencyCode: string): string {
    return `Processed payment of ${amountInCents / 100} ${currencyCode}.`;
  }
}

// STEP 3: Implement the Adapter
// The Adapter will translate the calls from the `PaymentProcessor` interface to the `LegacyPaymentService` interface.
class PaymentAdapter implements PaymentProcessor {
  private legacyPaymentService: LegacyPaymentService;

  constructor(legacyPaymentService: LegacyPaymentService) {
    this.legacyPaymentService = legacyPaymentService;
  }

  pay(amount: number, currency: string): string {
    const amountInCents = amount * 100; // Convert to cents
    return this.legacyPaymentService.processPayment(amountInCents, currency);
  }
}

// STEP 4: THE CLIENT
// Now, the client can use the `PaymentProcessor` interface without worrying about the underlying implementation.

function makePayment(
  processor: PaymentProcessor,
  amount: number,
  currency: string,
) {
  console.log(processor.pay(amount, currency));
}

// Usage
const legacyService = new LegacyPaymentService();
const paymentProcessor = new PaymentAdapter(legacyService);

makePayment(paymentProcessor, 29.99, 'USD'); // Output: Processed payment of 29.99 USD.
