// STEP 2: Create Receiver classes for different devices

class Thermostat {
  private temperature: number = 22;

  setTemperature(temp: number): void {
    this.temperature = temp;
    console.log(`Thermostat temperature set to ${temp}°C`);
  }

  getTemperature(): number {
    return this.temperature;
  }
}

export default Thermostat;
