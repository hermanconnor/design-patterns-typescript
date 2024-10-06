import { IFileReader } from './interfaces';

// STEP 2: Create the Real Subject

class RealFileReader implements IFileReader {
  public read(filePath: string): string {
    console.log(`Reading file from disk: ${filePath}`);

    // Simulate an expensive operation, e.g., reading from a file
    return `Contents of ${filePath}`;
  }
}

export default RealFileReader;
