import { IFileSystemComponent } from './interfaces';

// Leaf
class File implements IFileSystemComponent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  display(indent: string): void {
    console.log(`${indent}File: ${this.name}`);
  }
}

export default File;
