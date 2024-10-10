// STEP 1: Define the Abstract Expression

export interface IExpression {
  interpret(item: any): boolean;
}
