import { IPaymentStrategy } from './interfaces';

// Concrete Strategies

class BitcoinPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Bitcoin.`);
  }
}

export default BitcoinPayment;
