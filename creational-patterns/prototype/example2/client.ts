import MyCar from './MyCar';

function main() {
  // Create a prototype car
  const carPrototype = new MyCar('Honda', 'Accord', 2023, [
    'Air Conditioning',
    'Navigation',
  ]);

  // Clone the prototype to create new cars
  const car1 = carPrototype.clone(true); // deep clone
  const car2 = carPrototype.clone(false); // shallow clone

  // Modify the features of car1
  car1.features.push('Sunroof');

  console.log(carPrototype.features); // ['Air Conditioning', 'Navigation']
  console.log(car1.features); // ['Air Conditioning', 'Navigation', 'Sunroof']
  console.log(car2.features); // ['Air Conditioning', 'Navigation']
}

main();
