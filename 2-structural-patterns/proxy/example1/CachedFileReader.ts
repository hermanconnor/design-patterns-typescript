import { IFileReader } from './interfaces';
import RealFileReader from './RealFileReader';

// STEP 3: Create the Proxy with Caching

class CachedFileReader implements IFileReader {
  private realFileReader: RealFileReader;
  private cache: Map<string, string>;

  constructor() {
    this.realFileReader = new RealFileReader();
    this.cache = new Map();
  }

  public read(filePath: string): string {
    if (this.cache.has(filePath)) {
      console.log(`Returning cached content for: ${filePath}`);

      return this.cache.get(filePath)!;
    }

    const content = this.realFileReader.read(filePath);
    this.cache.set(filePath, content);

    return content;
  }
}

export default CachedFileReader;
