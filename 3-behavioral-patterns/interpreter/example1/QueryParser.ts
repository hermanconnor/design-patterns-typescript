import AndExpression from './AndExpression';
import ComparisonExpression from './ComparisonExpression';
import EqualityExpression from './EqualityExpression';
import { IExpression } from './interfaces';
import OrExpression from './OrExpression';

class QueryParser {
  private tokens: string[];
  private position: number = 0;

  constructor(input: string) {
    this.tokens = input.split(' ').filter((token) => token.length > 0);
  }

  private parseCondition(): IExpression {
    const field = this.tokens[this.position++];
    const operator = this.tokens[this.position++];
    const value = this.tokens[this.position++];
    if (operator === '==') {
      return new EqualityExpression(field, value.replace(/"/g, ''));
    } else {
      return new ComparisonExpression(field, operator, parseFloat(value));
    }
  }

  private parseExpression(): IExpression {
    let left = this.parseCondition();

    while (this.position < this.tokens.length) {
      const token = this.tokens[this.position];
      if (token === 'AND') {
        this.position++;
        left = new AndExpression(left, this.parseCondition());
      } else if (token === 'OR') {
        this.position++;
        left = new OrExpression(left, this.parseCondition());
      } else {
        break;
      }
    }
    return left;
  }

  parse(): IExpression {
    return this.parseExpression();
  }
}

export default QueryParser;
