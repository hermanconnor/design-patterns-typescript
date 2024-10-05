import { ICharacter } from './interfaces';

// STEP 2: Create Concrete Flyweight Classes

class Warrior implements ICharacter {
  constructor(private color: string) {}

  display(extrinsicState: { x: number; y: number; health: number }): void {
    console.log(
      `Warrior [${this.color}] - Position: (${extrinsicState.x}, ${extrinsicState.y}), Health: ${extrinsicState.health}`,
    );
  }
}

export default Warrior;
