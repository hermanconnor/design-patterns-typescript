import ComputerBuilder from './ComputerBuilder';
import { IComputer } from './interfaces';

export default class Computer implements IComputer {
  public readonly cpu: string;
  public readonly ram: string;
  public readonly gpu: string;
  public readonly storage: string;

  constructor(builder: ComputerBuilder) {
    this.cpu = builder.cpu;
    this.ram = builder.ram;
    this.gpu = builder.gpu;
    this.storage = builder.storage;
  }
}
