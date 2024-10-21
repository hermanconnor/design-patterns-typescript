import DataProcessor from './DataProcessor';

// Concrete class for JSON data processing

class JSONDataProcessor extends DataProcessor {
  readData(): void {
    console.log('Reading data from JSON file...');
  }

  processData(): void {
    console.log('Processing JSON data...');
  }
}

export default JSONDataProcessor;
