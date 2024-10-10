import CommandParser from './CommandParser';
import HomeAutomationContext from './HomeAutomationContext';

const context = new HomeAutomationContext();

const commands = ['turn on lights', 'set thermostat to 22', 'turn off lights'];

for (const commandString of commands) {
  const command = CommandParser.parse(commandString);
  command.execute(context);
}

/**
In this example, the Interpreter pattern is used for parsing and interpreting commands in a simple home automation system. This system could interpret commands like "turn on the lights" or "set the thermostat to 22 degrees."
 
Explanation:
  - Command Interface: Defines a method for executing commands.
  - HomeAutomationContext: Maintains the state of the home automation system and provides methods to manipulate it.
  - Concrete Commands: Implements specific commands for turning lights on/off and setting the thermostat.
  - Command Parser: Parses command strings into command objects that can be executed.
  - Usage: Creates a context and executes a series of commands by parsing their string representations.
 

 */
