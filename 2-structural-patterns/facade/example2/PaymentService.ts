// STEP 1: Define the Complex Classes

class PaymentService {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of $${amount}`);
    // Simulate successful payment processing
    return true;
  }
}

export default PaymentService;
