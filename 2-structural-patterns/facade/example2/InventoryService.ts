// STEP 1: Define the Complex Classes

class InventoryService {
  isProductAvailable(productId: number, quantity: number): boolean {
    console.log(
      `Checking availability for Product ID: ${productId}, Quantity: ${quantity}`,
    );
    // Simulate product availability
    return true;
  }
}

export default InventoryService;
