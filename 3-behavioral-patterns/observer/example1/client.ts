import EmailNotification from './EmailNotification';
import Product from './Product';
import StockDisplay from './StockDisplay';

const product = new Product();
const stockDisplay = new StockDisplay();
const emailNotification = new EmailNotification(5); // Notify when stock is below 5

product.addObserver(stockDisplay);
product.addObserver(emailNotification);

// Simulating stock level changes
product.setStockLevel(10); // Should update stock display
product.setStockLevel(4); // Should update stock display and send email notification
product.setStockLevel(6); // Should update stock display
