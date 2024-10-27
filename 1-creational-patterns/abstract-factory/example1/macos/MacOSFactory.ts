import IButton from '../interfaces/Button';
import ICheckbox from '../interfaces/Checkbox';
import GUIFactory from '../interfaces/GUIFactory';
import MacButton from './MacOSButton';
import MacCheckbox from './MacOSCheckbox';

export default class MacFactory implements GUIFactory {
  createButton(): IButton {
    return new MacButton();
  }

  createCheckbox(): ICheckbox {
    return new MacCheckbox();
  }
}
