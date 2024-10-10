import { ICommand } from './interfaces';
import {
  SetThermostatCommand,
  TurnOffLightsCommand,
  TurnOnLightsCommand,
} from './commands';

class CommandParser {
  static parse(command: string): ICommand {
    const tokens = command.split(' ');

    if (tokens[0] === 'turn' && tokens[1] === 'on' && tokens[2] === 'lights') {
      return new TurnOnLightsCommand();
    } else if (
      tokens[0] === 'turn' &&
      tokens[1] === 'off' &&
      tokens[2] === 'lights'
    ) {
      return new TurnOffLightsCommand();
    } else if (tokens[0] === 'set' && tokens[1] === 'thermostat') {
      const temperature = parseInt(tokens[3], 10);

      return new SetThermostatCommand(temperature);
    }

    throw new Error('Unknown command');
  }
}

export default CommandParser;
