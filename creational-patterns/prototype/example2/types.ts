export interface ICar {
  make: string;
  model: string;
  year: number;
  features: string[];
  clone(deep?: boolean): ICar;
}
