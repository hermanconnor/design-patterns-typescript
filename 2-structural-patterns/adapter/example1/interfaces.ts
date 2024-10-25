// STEP 1: Define the Target Interface

export interface IPaymentProcessor {
  pay(amount: number, currency: string): string;
}
