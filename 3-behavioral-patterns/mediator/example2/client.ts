import HomeAutomationMediator from './HomeAutomationMediator';
import Light from './Light';
import SecurityCamera from './SecurityCamera';
import Thermostat from './Thermostat';

/**
 In this example, we simulate a Home Automation System. We have various devices (like lights, thermostats, and security cameras) that need to communicate with each other through a central Home Automation Mediator. The mediator facilitates the interactions among devices without them needing to know the specifics of one another.

 Explanation:
  1. HomeAutomationMediator:
    - Manages all devices in the home automation system.
    - When an event is triggered by one device, it notifies all other devices through the `triggerEvent` method.

  2. Device (Abstract Class):
    - Represents any device in the system.
    - Contains methods to set the mediator, get the device name, and react to events.

  3. Specific Devices:
    - Light: Turns on when it detects motion.
    - Thermostat: Adjusts the temperature when notified of a temperature change.
    - SecurityCamera: Starts recording when it detects motion.

  4. Client Code:
    - Creates instances of the devices and adds them to the mediator.
    - Simulates events that trigger reactions from other devices.
 */

const homeAutomation = new HomeAutomationMediator();

const livingRoomLight = new Light();
const thermostat = new Thermostat();
const frontDoorCamera = new SecurityCamera();

homeAutomation.addDevice(livingRoomLight);
homeAutomation.addDevice(thermostat);
homeAutomation.addDevice(frontDoorCamera);

// Simulating events
livingRoomLight.reactToEvent('motion detected', livingRoomLight);
homeAutomation.triggerEvent('motion detected', livingRoomLight);

thermostat.reactToEvent('temperature change', thermostat);
homeAutomation.triggerEvent('temperature change', thermostat);
