// STEP 2: Create Receiver classes for different devices

class Fan {
  private speed: number = 0;

  setSpeed(speed: number): void {
    this.speed = speed;
    console.log(`Fan speed set to ${speed}`);
  }

  getSpeed(): number {
    return this.speed;
  }
}

export default Fan;
