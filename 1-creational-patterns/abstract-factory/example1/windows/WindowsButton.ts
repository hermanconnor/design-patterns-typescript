import IButton from '../interfaces/Button';

export default class WindowsButton implements IButton {
  render(): void {
    console.log('Rendering a Windows Button.');
  }
}
