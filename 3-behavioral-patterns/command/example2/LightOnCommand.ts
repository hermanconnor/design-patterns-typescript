import { ICommand } from './interfaces';
import Light from './Light';

// STEP 3: Create Concrete Command classes

class LightOnCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}

export default LightOnCommand;
