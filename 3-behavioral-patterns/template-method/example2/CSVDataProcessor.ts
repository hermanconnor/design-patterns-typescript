import DataProcessor from './DataProcessor';

// Concrete class for CSV data processing

class CSVDataProcessor extends DataProcessor {
  readData(): void {
    console.log('Reading data from CSV file...');
  }

  processData(): void {
    console.log('Processing CSV data...');
  }
}

export default CSVDataProcessor;
