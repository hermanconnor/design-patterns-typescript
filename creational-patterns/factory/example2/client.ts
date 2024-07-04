import IceCreamFactory from './IceCreamFactory';

const vanilla = IceCreamFactory.createIcecream('vanilla');
const chocolate = IceCreamFactory.createIcecream('chocolate');
const strawberry = IceCreamFactory.createIcecream('strawberry');

console.log(chocolate?.message());
console.log(vanilla?.message());
console.log(strawberry?.message());
