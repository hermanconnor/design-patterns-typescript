import Fan from './Fan';
import Light from './Light';
import LightOffCommand from './LightOffCommand';
import LightOnCommand from './LightOnCommand';
import RemoteControl from './RemoteControl';
import SetFanSpeedCommand from './SetFanSpeedCommand';
import SetTemperatureCommand from './SetTemperatureCommand';
import Thermostat from './Thermostat';

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
