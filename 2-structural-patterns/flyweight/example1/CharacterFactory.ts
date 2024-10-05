import { ICharacter } from './interfaces';
import Archer from './Archer';
import Mage from './Mage';
import Warrior from './Warrior';

// STEP 3: Create the Flyweight Factory

class CharacterFactory {
  private characters: { [key: string]: ICharacter } = {};

  getCharacter(type: string, color: string): ICharacter {
    const key = `${type}_${color}`;

    if (!this.characters[key]) {
      if (type === 'warrior') {
        this.characters[key] = new Warrior(color);
      } else if (type === 'mage') {
        this.characters[key] = new Mage(color);
      } else if (type === 'archer') {
        this.characters[key] = new Archer(color);
      }
    }

    return this.characters[key];
  }
}

export default CharacterFactory;
