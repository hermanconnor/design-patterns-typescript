import { IExpression } from './interfaces';

class AndExpression implements IExpression {
  private left: IExpression;
  private right: IExpression;

  constructor(left: IExpression, right: IExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(item: any): boolean {
    return this.left.interpret(item) && this.right.interpret(item);
  }
}

export default AndExpression;
