import Character from './Character';

// Create a new character
const hero = new Character('Hero', 100);

// Clone the character
const heroClone = hero.clone();

// Modify the clone
heroClone.name = 'Hero Clone';
heroClone.health = 80;

console.log(hero);
console.log(heroClone);
