import IButton from '../interfaces/Button';

export default class MacButton implements IButton {
  render(): void {
    console.log('Rendering a Mac Button.');
  }
}
