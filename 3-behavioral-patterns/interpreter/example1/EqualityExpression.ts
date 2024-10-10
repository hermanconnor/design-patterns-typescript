import { IExpression } from './interfaces';

class EqualityExpression implements IExpression {
  private field: string;
  private value: any;

  constructor(field: string, value: any) {
    this.field = field;
    this.value = value;
  }

  interpret(item: any): boolean {
    return item[this.field] === this.value;
  }
}

export default EqualityExpression;
