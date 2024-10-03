import CheckoutFacade from './CheckoutFacade';
import InventoryService from './InventoryService';
import OrderConfirmationService from './OrderConfirmationService';
import PaymentService from './PaymentService';

/**
 * In this example, we’ll create a facade for managing the checkout process, which includes interacting with inventory, payment processing, and order confirmation services.
  
 * SCENARIO:
      When a user checks out, the system needs to:
      1. Verify product availability (Inventory Service).
      2. Process the payment (Payment Service).
      3. Confirm the order (Order Confirmation Service).

    Instead of interacting with these services individually, we can create a `CheckoutFacade` that simplifies the checkout process.
 */

// STEP 3: Using the Facade

const inventoryService = new InventoryService();
const paymentService = new PaymentService();
const orderConfirmationService = new OrderConfirmationService();

const checkoutFacade = new CheckoutFacade(
  inventoryService,
  paymentService,
  orderConfirmationService,
);

// Simulate a checkout process
checkoutFacade.checkout(101, 2, 49.99);
