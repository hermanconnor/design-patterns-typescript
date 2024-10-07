import { ICommand } from './interfaces';
import Thermostat from './Thermostat';

// STEP 3: Create Concrete Command classes

class SetTemperatureCommand implements ICommand {
  private thermostat: Thermostat;
  private temperature: number;
  private previousTemperature: number;

  constructor(thermostat: Thermostat, temperature: number) {
    this.thermostat = thermostat;
    this.temperature = temperature;
    this.previousTemperature = thermostat.getTemperature();
  }

  execute(): void {
    this.thermostat.setTemperature(this.temperature);
  }

  undo(): void {
    this.thermostat.setTemperature(this.previousTemperature);
  }
}

export default SetTemperatureCommand;
