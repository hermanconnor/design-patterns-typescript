import { IPaymentStrategy } from './interfaces';

// Concrete Strategies

class PayPalPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal.`);
  }
}

export default PayPalPayment;
