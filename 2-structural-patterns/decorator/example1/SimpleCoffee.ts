import { ICoffee } from './interfaces';

export default class SimpleCoffee implements ICoffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return 'Simple Coffee';
  }
}
