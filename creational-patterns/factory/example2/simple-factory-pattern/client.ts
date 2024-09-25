import IceCreamFactory from './IceCreamFactory';

const iceCream1 = IceCreamFactory.createIceCream('vanilla');
iceCream1?.message(); // Output: You chose Vanilla ice cream!

const iceCream2 = IceCreamFactory.createIceCream('chocolate');
iceCream2?.message(); // Output: You chose Chocolate ice cream!

const iceCream3 = IceCreamFactory.createIceCream('strawberry');
iceCream3?.message(); // Output: You chose Strawberry ice cream!

const iceCream4 = IceCreamFactory.createIceCream('mint');
// Output: null (no message, as the flavor doesn't exist)
