import HomeAutomationContext from './HomeAutomationContext';

export interface ICommand {
  execute(context: HomeAutomationContext): void;
}
