import { IPaymentProcessor } from './interfaces';
import LegacyPaymentService from './LegacyPaymentService';
import PaymentAdapter from './PaymentAdapter';

/**
 * In this example, we need to integrate a third-party payment processing library into our application. The existing library has a different interface than what our application expects.
 */

// STEP 4: THE CLIENT

function makePayment(
  processor: IPaymentProcessor,
  amount: number,
  currency: string,
) {
  console.log(processor.pay(amount, currency));
}

// Usage
const legacyService = new LegacyPaymentService();
const paymentProcessor = new PaymentAdapter(legacyService);

makePayment(paymentProcessor, 29.99, 'USD'); // Output: Processed payment of 29.99 USD.
