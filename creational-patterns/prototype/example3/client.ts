import MyDocument from './MyDocument';

// Example Usage
const ORIGINAL_DOCUMENT = new MyDocument('Original', [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]);

console.log(ORIGINAL_DOCUMENT);
console.log();

// Shallow Copy
const documentCopy1 = ORIGINAL_DOCUMENT.clone(1);
documentCopy1.name = 'Copy 1';
documentCopy1.arr[1][2] = 200; // Modifies the original due to shallow copy
console.log(documentCopy1);
console.log();

// Another Shallow Copy
const documentCopy2 = ORIGINAL_DOCUMENT.clone(1);
documentCopy2.name = 'Copy 2';
documentCopy2.arr[1] = [9, 10, 11, 12]; // Changes reference, does NOT modify original
console.log(documentCopy2);
console.log(ORIGINAL_DOCUMENT);
console.log();

// Deep Copy
const documentCopy3 = ORIGINAL_DOCUMENT.clone(2);
documentCopy3.name = 'Copy 3';
documentCopy3.arr[1][0] = 1234; // does NOT modify original
console.log(documentCopy3);
console.log(ORIGINAL_DOCUMENT);
console.log();
