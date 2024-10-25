import { IPaymentProcessor } from './interfaces';
import LegacyPaymentService from './LegacyPaymentService';

// STEP 3: Implement the Adapter

class PaymentAdapter implements IPaymentProcessor {
  private legacyPaymentService: LegacyPaymentService;

  constructor(legacyPaymentService: LegacyPaymentService) {
    this.legacyPaymentService = legacyPaymentService;
  }

  pay(amount: number, currency: string): string {
    const amountInCents = amount * 100; // Convert to cents
    return this.legacyPaymentService.processPayment(amountInCents, currency);
  }
}

export default PaymentAdapter;
