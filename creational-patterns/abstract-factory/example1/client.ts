import FurnitureFactory from './FurnitureFactory';

// Small Chair
let FURNITURE = FurnitureFactory.getFurniture('small chair');
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());

// Medium Table
FURNITURE = FurnitureFactory.getFurniture('medium table');
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());

// Error - No Factory Found for furniture type: king bed
FURNITURE = FurnitureFactory.getFurniture('king bed');
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
