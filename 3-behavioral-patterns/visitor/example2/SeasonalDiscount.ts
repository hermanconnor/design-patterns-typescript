import DigitalProduct from './DigitalProduct';
import { IProductVisitor } from './interfaces';
import PhysicalProduct from './PhysicalProduct';
import Service from './Service';

// Create Concrete Visitors for Discounts

class SeasonalDiscount implements IProductVisitor {
  visitPhysicalProduct(product: PhysicalProduct): void {
    const discount = product.price * 0.1; // 10% discount

    console.log(
      `Seasonal discount on ${product.name}: $${discount.toFixed(2)}`,
    );
  }

  visitDigitalProduct(product: DigitalProduct): void {
    const discount = product.price * 0.05; // 5% discount

    console.log(
      `Seasonal discount on ${product.name}: $${discount.toFixed(2)}`,
    );
  }

  visitService(product: Service): void {
    const discount = product.price * 0.2; // 20% discount

    console.log(
      `Seasonal discount on ${product.name}: $${discount.toFixed(2)}`,
    );
  }
}

export default SeasonalDiscount;
