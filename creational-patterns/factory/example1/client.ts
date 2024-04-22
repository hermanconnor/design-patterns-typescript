import ChairFactory from './ChairFactory';

const small = ChairFactory.getChair('small');
console.log('SMALL:', small.getDimensions());

const medium = ChairFactory.getChair('medium');
console.log('MEDIUM:', medium.getDimensions());

const big = ChairFactory.getChair('big');
console.log('BIG:', big.getDimensions());
