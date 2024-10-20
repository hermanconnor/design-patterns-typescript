import { IPaymentStrategy } from './interfaces';

// Context Class

class ShoppingCart {
  private paymentStrategy: IPaymentStrategy;

  constructor(paymentStrategy: IPaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: IPaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

export default ShoppingCart;
