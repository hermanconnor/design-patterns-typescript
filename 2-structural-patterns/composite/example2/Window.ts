import { UIComponent } from './interfaces';
import Panel from './Panel';

// Composite
class Window implements UIComponent {
  private title: string;
  private panels: Panel[] = [];

  constructor(title: string) {
    this.title = title;
  }

  addPanel(panel: Panel): void {
    this.panels.push(panel);
  }

  render(indent: string): void {
    console.log(`${indent}Window: ${this.title}`);

    for (const panel of this.panels) {
      panel.render(indent + '  '); // Increase indentation for child panels
    }
  }
}

export default Window;
