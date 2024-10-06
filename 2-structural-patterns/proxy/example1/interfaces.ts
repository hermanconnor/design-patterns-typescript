// STEP 1: Define the Subject Interface

export interface IFileReader {
  read(filePath: string): string;
}
