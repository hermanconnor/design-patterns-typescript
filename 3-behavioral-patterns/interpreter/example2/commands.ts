import HomeAutomationContext from './HomeAutomationContext';
import { ICommand } from './interfaces';

export class TurnOnLightsCommand implements ICommand {
  execute(context: HomeAutomationContext): void {
    context.turnOnLights();
  }
}

export class TurnOffLightsCommand implements ICommand {
  execute(context: HomeAutomationContext): void {
    context.turnOffLights();
  }
}

export class SetThermostatCommand implements ICommand {
  constructor(private temperature: number) {}

  execute(context: HomeAutomationContext): void {
    context.setThermostat(this.temperature);
  }
}
