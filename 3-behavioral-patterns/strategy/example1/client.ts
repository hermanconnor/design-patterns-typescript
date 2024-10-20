import BitcoinPayment from './BitcoinPayment';
import CreditCardPayment from './CreditCardPayment';
import PayPalPayment from './PayPalPayment';
import ShoppingCart from './ShoppingCart';

/**
 * In this example, we simulate a payment processing system that allows customers to pay using different methods like credit card, PayPal, or Bitcoin. The strategy pattern will help us encapsulate each payment method and allow for easy switching between them.
 */

// Create a shopping cart with credit card payment
const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100);

// Switch to PayPal payment
cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(200);

// Switch to Bitcoin payment
cart.setPaymentStrategy(new BitcoinPayment());
cart.checkout(300); // Output: Paid $300 using Bitcoin.
