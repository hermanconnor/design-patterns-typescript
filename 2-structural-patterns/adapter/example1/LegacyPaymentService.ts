// STEP 2: Create the Adaptee
// This is the third-party payment processing library that has a different interface.
class LegacyPaymentService {
  public processPayment(amountInCents: number, currencyCode: string): string {
    return `Processed payment of ${amountInCents / 100} ${currencyCode}.`;
  }
}

export default LegacyPaymentService;
