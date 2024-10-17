// Memento class

class CharacterMemento {
  private health: number;
  private level: number;
  private inventory: string[];

  constructor(health: number, level: number, inventory: string[]) {
    this.health = health;
    this.level = level;
    this.inventory = [...inventory]; // Clone inventory to preserve state
  }

  public getHealth(): number {
    return this.health;
  }

  public getLevel(): number {
    return this.level;
  }

  public getInventory(): string[] {
    return [...this.inventory]; // Return a copy of the inventory
  }
}

export default CharacterMemento;
