import { IPaymentStrategy } from './interfaces';

// Concrete Strategies

class CreditCardPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card.`);
  }
}

export default CreditCardPayment;
