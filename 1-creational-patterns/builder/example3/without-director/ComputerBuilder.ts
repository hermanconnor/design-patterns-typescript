import Computer from './Computer';
import { IComputer, IComputerBuilder } from './interfaces';

export default class ComputerBuilder implements IComputerBuilder {
  public cpu: string = 'Default CPU';
  public ram: string = '8GB';
  public gpu: string = 'Integrated Graphics';
  public storage: string = '256GB SSD';

  public setCPU(cpu: string): this {
    this.cpu = cpu;
    return this;
  }

  public setRAM(ram: string): this {
    this.ram = ram;
    return this;
  }

  public setGPU(gpu: string): this {
    this.gpu = gpu;
    return this;
  }

  public setStorage(storage: string): this {
    this.storage = storage;
    return this;
  }

  public build(): IComputer {
    return new Computer(this);
  }
}
