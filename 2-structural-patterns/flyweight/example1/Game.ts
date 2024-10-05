import CharacterFactory from './CharacterFactory';

// STEP 4: Use the Flyweights in the Game

class Game {
  private factory: CharacterFactory = new CharacterFactory();

  createCharacters(): void {
    const characters = [
      { type: 'warrior', color: 'red', x: 10, y: 20, health: 100 },
      { type: 'mage', color: 'blue', x: 30, y: 40, health: 80 },
      { type: 'archer', color: 'green', x: 50, y: 60, health: 90 },
      { type: 'warrior', color: 'red', x: 70, y: 80, health: 95 },
      { type: 'mage', color: 'blue', x: 90, y: 100, health: 85 },
    ];

    characters.forEach(({ type, color, x, y, health }) => {
      const character = this.factory.getCharacter(type, color);

      character.display({ x, y, health });
    });
  }
}

export default Game;
