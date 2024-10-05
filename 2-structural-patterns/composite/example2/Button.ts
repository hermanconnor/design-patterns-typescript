import { UIComponent } from './interfaces';

// Leaf
class Button implements UIComponent {
  private label: string;

  constructor(label: string) {
    this.label = label;
  }

  render(indent: string): void {
    console.log(`${indent}Button: ${this.label}`);
  }
}

export default Button;
