// Abstract class defining the template method

abstract class DataProcessor {
  // Template method
  process(): void {
    this.readData();
    this.processData();
    this.saveData();
  }

  // Common steps
  saveData(): void {
    console.log('Saving processed data...');
  }

  // Abstract methods to be implemented by subclasses
  abstract readData(): void;
  abstract processData(): void;
}

export default DataProcessor;
