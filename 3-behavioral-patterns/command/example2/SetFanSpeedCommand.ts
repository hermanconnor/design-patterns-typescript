import Fan from './Fan';
import { ICommand } from './interfaces';

// STEP 3: Create Concrete Command classes

class SetFanSpeedCommand implements ICommand {
  private fan: Fan;
  private speed: number;
  private previousSpeed: number;

  constructor(fan: Fan, speed: number) {
    this.fan = fan;
    this.speed = speed;
    this.previousSpeed = fan.getSpeed();
  }

  execute(): void {
    this.fan.setSpeed(this.speed);
  }

  undo(): void {
    this.fan.setSpeed(this.previousSpeed);
  }
}

export default SetFanSpeedCommand;
