import { IComputer, IComputerBuilder } from './interfaces';

export default class ComputerDirector {
  private builder: IComputerBuilder;

  constructor(builder: IComputerBuilder) {
    this.builder = builder;
  }

  public buildGamingPC(): IComputer {
    return this.builder
      .setCPU('Intel i9')
      .setRAM('32GB')
      .setGPU('NVIDIA RTX 3080')
      .setStorage('1TB SSD')
      .build();
  }

  public buildOfficePC(): IComputer {
    return this.builder
      .setCPU('Intel i5')
      .setRAM('16GB')
      .setStorage('512GB HDD')
      .build();
  }
}
