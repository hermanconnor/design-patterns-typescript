import Game from './Game';

/** 
In this example, we'll look at the Flyweight pattern in a game development context. We'll manage different types of game characters that share common attributes (like appearance) but have unique attributes like position and health.

Imagine we have a game where we need to create many instances of characters like "Warrior," "Mage," and "Archer." Each character has a specific appearance (color, sprite) that can be shared, but their position and health are unique to each instance.

Explanation of the Code
  1. Character Interface: This defines a `display` method that takes the extrinsic state (position and health).

  2. Concrete Flyweights (Warrior, Mage, Archer): Each class holds intrinsic state (color) and implements the `display` method to show the character's details.

  3. CharacterFactory: Manages the creation and retrieval of character objects. It checks if a character with the specified type and color already exists and creates it if not.

  4. Game Class: The client that uses the `CharacterFactory` to create and display characters. It provides their unique attributes (position and health) when displaying.
 */

// Usage
const game = new Game();
game.createCharacters();
