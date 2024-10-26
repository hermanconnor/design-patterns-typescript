export interface IComputer {
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
}

export interface IComputerBuilder {
  setCPU(cpu: string): this;
  setRAM(ram: string): this;
  setGPU(gpu: string): this;
  setStorage(storage: string): this;
  build(): IComputer;
}
