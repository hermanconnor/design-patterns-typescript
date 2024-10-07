// STEP 2: Create Receiver classes for different devices

class Light {
  private isOn: boolean = false;

  on(): void {
    this.isOn = true;
    console.log('Light is ON');
  }

  off(): void {
    this.isOn = false;
    console.log('Light is OFF');
  }

  getStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }
}

export default Light;
