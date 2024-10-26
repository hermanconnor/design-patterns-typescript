import ComputerBuilder from './ComputerBuilder';
import { IComputer } from './interfaces';

const gamingPC: IComputer = new ComputerBuilder()
  .setCPU('Intel i9')
  .setRAM('32GB')
  .setGPU('NVIDIA RTX 3080')
  .setStorage('1TB SSD')
  .build();

const officePC: IComputer = new ComputerBuilder()
  .setCPU('Intel i5')
  .setRAM('16GB')
  .setStorage('512GB HDD')
  .build();

console.log(gamingPC);
console.log(officePC);
