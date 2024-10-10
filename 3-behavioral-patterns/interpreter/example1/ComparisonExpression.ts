import { IExpression } from './interfaces';

class ComparisonExpression implements IExpression {
  private field: string;
  private operator: string;
  private value: number;

  constructor(field: string, operator: string, value: number) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  interpret(item: any): boolean {
    switch (this.operator) {
      case '<':
        return item[this.field] < this.value;
      case '>':
        return item[this.field] > this.value;
      case '<=':
        return item[this.field] <= this.value;
      case '>=':
        return item[this.field] >= this.value;
      default:
        throw new Error(`Unknown operator: ${this.operator}`);
    }
  }
}

export default ComparisonExpression;
