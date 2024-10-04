import { IFileSystemComponent } from './interfaces';

// Composite
class Directory implements IFileSystemComponent {
  private name: string;
  private children: IFileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(component: IFileSystemComponent): void {
    this.children.push(component);
  }

  remove(component: IFileSystemComponent): void {
    const index = this.children.indexOf(component);

    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getName(): string {
    return this.name;
  }

  display(indent: string): void {
    console.log(`${indent}Directory: ${this.name}`);

    for (const child of this.children) {
      child.display(indent + '  '); // Increase indentation for child components
    }
  }
}

export default Directory;
