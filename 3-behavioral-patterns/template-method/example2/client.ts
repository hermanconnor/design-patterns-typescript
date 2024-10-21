import CSVDataProcessor from './CSVDataProcessor';
import DataProcessor from './DataProcessor';
import JSONDataProcessor from './JSONDataProcessor';

// Client code
function runDataProcessing(processor: DataProcessor): void {
  processor.process();
}

// Usage
const csvProcessor = new CSVDataProcessor();
const jsonProcessor = new JSONDataProcessor();

runDataProcessing(csvProcessor);
console.log('-'.repeat(50));
runDataProcessing(jsonProcessor);

/**
In this example, we create a data processor that reads data from different formats. The core workflow remains the same, but the specifics of reading and processing the data will differ based on the format.
 
Explanation
  1. Abstract Class (`DataProcessor`): This class defines the `processData` method as the template method. It specifies the workflow for data processing, which includes reading the data, processing it, and saving the processed data. The `saveData` method is concrete, while `readData` and `processData` are abstract and need to be implemented by subclasses.

  2. Concrete Classes (`CsvDataProcessor` and `JsonDataProcessor`): These classes implement the `readData` and `processData` methods, providing the specific logic for reading from CSV and JSON formats, respectively.

  3. Client Code: The `runDataProcessing` function takes a `DataProcessor` object and calls the `processData` method, initiating the data processing workflow.
 */
