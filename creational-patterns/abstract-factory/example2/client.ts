import IButton from './interfaces/Button';
import ICheckbox from './interfaces/Checkbox';
import GUIFactory from './interfaces/GUIFactory';
import MacFactory from './macos/MacOSFactory';
import WindowsFactory from './windows/WindowsFactory';

class Application {
  private button: IButton;
  private checkbox: ICheckbox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  renderUI(): void {
    this.button.render();
    this.checkbox.render();
  }
}

function main() {
  let factory: GUIFactory;

  // Choose the factory based on the environment (e.g., user preference or system type)
  const isWindows = true; // Simulating a condition

  if (isWindows) {
    factory = new WindowsFactory();
  } else {
    factory = new MacFactory();
  }

  const app = new Application(factory);
  app.renderUI();
}

main();
