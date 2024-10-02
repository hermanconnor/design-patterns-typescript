import IButton from '../interfaces/Button';
import ICheckbox from '../interfaces/Checkbox';
import GUIFactory from '../interfaces/GUIFactory';
import WindowsButton from './WindowsButton';
import WindowsCheckbox from './WindowsCheckbox';

export default class WindowsFactory implements GUIFactory {
  createButton(): IButton {
    return new WindowsButton();
  }

  createCheckbox(): ICheckbox {
    return new WindowsCheckbox();
  }
}
