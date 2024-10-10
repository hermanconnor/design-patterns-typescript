import QueryParser from './QueryParser';

const items = [
  { name: 'Apple', price: 50, category: 'Fruits' },
  { name: 'Banana', price: 30, category: 'Fruits' },
  { name: 'Carrot', price: 20, category: 'Vegetables' },
  { name: 'Orange', price: 80, category: 'Fruits' },
  { name: 'Broccoli', price: 40, category: 'Vegetables' },
];

function filterItems(query: string): any[] {
  const parser = new QueryParser(query);
  const expression = parser.parse();

  return items.filter((item) => expression.interpret(item));
}

// Example queries
console.log(filterItems('name == "Apple"')); // Output: [{ name: "Apple", price: 50, category: "Fruits" }]
console.log(filterItems('price < 50')); // Output: [{ name: "Banana", price: 30, category: "Fruits" }, { name: "Carrot", price: 20, category: "Vegetables" }, { name: "Broccoli", price: 40, category: "Vegetables" }]
console.log(filterItems('category == "Fruits" AND price < 80')); // Output: [{ name: "Apple", price: 50, category: "Fruits" }, { name: "Banana", price: 30, category: "Fruits" }]
