import IButton from './Button';
import ICheckbox from './Checkbox';

export default interface GUIFactory {
  createButton(): IButton;
  createCheckbox(): ICheckbox;
}
