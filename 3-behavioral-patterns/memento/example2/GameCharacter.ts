import CharacterMemento from './CharacterMemento';

// Originator class

class GameCharacter {
  private health: number;
  private level: number;
  private inventory: string[];

  constructor() {
    this.health = 100;
    this.level = 1;
    this.inventory = [];
  }

  public setHealth(health: number): void {
    this.health = health;
    console.log(`Character health set to: ${this.health}`);
  }

  public setLevel(level: number): void {
    this.level = level;
    console.log(`Character level set to: ${this.level}`);
  }

  public addItem(item: string): void {
    this.inventory.push(item);
    console.log(`Added item: ${item}`);
  }

  public save(): CharacterMemento {
    console.log(
      `Saving character state: [Health: ${this.health}, Level: ${this.level}, Inventory: ${this.inventory}]`,
    );

    return new CharacterMemento(this.health, this.level, this.inventory);
  }

  public restore(memento: CharacterMemento): void {
    this.health = memento.getHealth();
    this.level = memento.getLevel();
    this.inventory = memento.getInventory();

    console.log(
      `Restored character state: [Health: ${this.health}, Level: ${this.level}, Inventory: ${this.inventory}]`,
    );
  }
}

export default GameCharacter;
