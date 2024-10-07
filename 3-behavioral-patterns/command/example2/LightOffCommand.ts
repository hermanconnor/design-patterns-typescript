import { ICommand } from './interfaces';
import Light from './Light';

// STEP 3: Create Concrete Command classes

class LightOffCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}

export default LightOffCommand;
