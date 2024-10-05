import { UIComponent } from './interfaces';

// Composite
class Panel implements UIComponent {
  private components: UIComponent[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  add(component: UIComponent): void {
    this.components.push(component);
  }

  remove(component: UIComponent): void {
    const index = this.components.indexOf(component);

    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  render(indent: string): void {
    console.log(`${indent}Panel: ${this.name}`);

    for (const component of this.components) {
      component.render(indent + '  '); // Increase indentation for child components
    }
  }
}

export default Panel;
