import CachedFileReader from './CachedFileReader';
import { IFileReader } from './interfaces';

/**
In this example, we'll create a system where reading files is expensive (e.g., reading from a remote server or a large file on disk). We’ll implement a caching proxy that stores previously read file contents, allowing for faster access on subsequent reads.

Explanation of the Code:
  - FileReader Interface: This defines the common interface for reading files.

  - RealFileReader Class: Implements the actual file reading logic. In a real scenario, this might involve file I/O operations that are expensive in terms of time.
  
  - CachedFileReader Class: This proxy class caches the results of file reads. It checks if the file content is already cached before calling the `RealFileReader`. If it is cached, it returns the cached content; otherwise, it reads the content, caches it, and returns it.
  
  - Client Code: Demonstrates how to use the proxy. The first call to `read` fetches the file content, while the second call retrieves it from the cache, significantly improving performance.
 */

function clientCode(fileReader: IFileReader, filePath: string) {
  console.log(fileReader.read(filePath));
  console.log(fileReader.read(filePath)); // This time should hit the cache
}

const fileReader = new CachedFileReader();
clientCode(fileReader, 'example.txt');
