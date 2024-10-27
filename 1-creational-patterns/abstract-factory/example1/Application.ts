import IButton from './interfaces/Button';
import ICheckbox from './interfaces/Checkbox';
import GUIFactory from './interfaces/GUIFactory';

export default class Application {
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
