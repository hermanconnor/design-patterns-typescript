import ComputerBuilder from './ComputerBuilder';
import ComputerDirector from './ComputerDirector';
import { IComputer, IComputerBuilder } from './interfaces';

const builder: IComputerBuilder = new ComputerBuilder();
const director = new ComputerDirector(builder);

const gamingPC: IComputer = director.buildGamingPC();
const officePC: IComputer = director.buildOfficePC();

console.log(gamingPC);
console.log(officePC);
