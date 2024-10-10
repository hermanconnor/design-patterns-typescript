class HomeAutomationContext {
  private lightsOn: boolean = false;
  private thermostatTemperature: number = 20; // Default temperature

  turnOnLights(): void {
    this.lightsOn = true;
    console.log('Lights are ON.');
  }

  turnOffLights(): void {
    this.lightsOn = false;
    console.log('Lights are OFF.');
  }

  setThermostat(temperature: number): void {
    this.thermostatTemperature = temperature;
    console.log(`Thermostat set to ${temperature} degrees.`);
  }
}

export default HomeAutomationContext;
