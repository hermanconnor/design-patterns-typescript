import InventoryService from './InventoryService';
import OrderConfirmationService from './OrderConfirmationService';
import PaymentService from './PaymentService';

// STEP 2: Create the Facade Class

class CheckoutFacade {
  private inventoryService: InventoryService;
  private paymentService: PaymentService;
  private orderConfirmationService: OrderConfirmationService;

  constructor(
    inventoryService: InventoryService,
    paymentService: PaymentService,
    orderConfirmationService: OrderConfirmationService,
  ) {
    this.inventoryService = inventoryService;
    this.paymentService = paymentService;
    this.orderConfirmationService = orderConfirmationService;
  }

  checkout(productId: number, quantity: number, paymentAmount: number): void {
    if (this.inventoryService.isProductAvailable(productId, quantity)) {
      if (this.paymentService.processPayment(paymentAmount)) {
        const orderDetails = {
          productId,
          quantity,
          amount: paymentAmount,
          status: 'confirmed',
        };

        this.orderConfirmationService.confirmOrder(orderDetails);
      } else {
        console.log('Payment failed. Please try again.');
      }
    } else {
      console.log('Product not available. Please check the quantity.');
    }
  }
}

export default CheckoutFacade;
