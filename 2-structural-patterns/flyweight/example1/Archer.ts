import { ICharacter } from './interfaces';

// STEP 2: Create Concrete Flyweight Classes

class Archer implements ICharacter {
  constructor(private color: string) {}

  display(extrinsicState: { x: number; y: number; health: number }): void {
    console.log(
      `Archer [${this.color}] - Position: (${extrinsicState.x}, ${extrinsicState.y}), Health: ${extrinsicState.health}`,
    );
  }
}

export default Archer;
