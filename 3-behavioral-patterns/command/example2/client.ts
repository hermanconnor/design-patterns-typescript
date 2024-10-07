import Fan from './Fan';
import Light from './Light';
import LightOffCommand from './LightOffCommand';
import LightOnCommand from './LightOnCommand';
import RemoteControl from './RemoteControl';
import SetFanSpeedCommand from './SetFanSpeedCommand';
import SetTemperatureCommand from './SetTemperatureCommand';
import Thermostat from './Thermostat';

/**
In this example, we'll implement a remote control system for a home automation setup. We'll be able to control different devices (like lights, fans, and a thermostat) using commands, and we can also implement a feature to schedule commands.

Explanation of the Implementation:
  1. Command Interface: The `ICommand` interface defines `execute` and `undo` methods.
  2. Receiver Classes: The `Light`, `Fan`, and `Thermostat` classes handle the specific functionalities of each device.
  3. Concrete Command Classes: Commands for turning the light on/off, setting the fan speed, and adjusting the thermostat are created. Each command class saves previous states to enable the undo functionality.
  4. Invoker Class: `RemoteControl` manages command execution, undo/redo functionality, and scheduling commands.
  5. Client Code: Demonstrates the creation of devices and commands, executing them, undoing an action, and scheduling a command.

 */

// STEP 5: Client code

const light = new Light();
const fan = new Fan();
const thermostat = new Thermostat();
const remote = new RemoteControl();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const fanSpeedCommand = new SetFanSpeedCommand(fan, 3);
const setTemperatureCommand = new SetTemperatureCommand(thermostat, 24);

// Execute commands
remote.executeCommand(lightOn);
remote.executeCommand(fanSpeedCommand);
remote.executeCommand(setTemperatureCommand);

console.log(`Light status: ${light.getStatus()}`); // Light status: ON
console.log(`Fan speed: ${fan.getSpeed()}`); // Fan speed: 3
console.log(`Thermostat temperature: ${thermostat.getTemperature()}°C`); // 24°C

// Undo last command (Thermostat)
remote.undo();
console.log(
  `Thermostat temperature after undo: ${thermostat.getTemperature()}°C`,
); // 22°C

// Schedule a command to turn off the light after 2 seconds
remote.scheduleCommand(lightOff, 2000);
