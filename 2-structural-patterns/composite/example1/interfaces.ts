export interface IFileSystemComponent {
  getName(): string;
  display(indent: string): void;
}
