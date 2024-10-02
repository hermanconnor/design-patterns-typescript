import House from './House';
import { IHouse } from './interfaces';

export default class HouseBuilder implements IHouse {
  house: House;

  constructor() {
    this.house = new House();
  }

  setBuildingType(buildingType: string) {
    this.house.buildingType = buildingType;
    return this;
  }

  setWallMaterial(wallMaterial: string) {
    this.house.wallMaterial = wallMaterial;
    return this;
  }

  setNumberDoors(numDoors: number) {
    this.house.doors = numDoors;
    return this;
  }

  setNumberWindows(numWindows: number) {
    this.house.windows = numWindows;
    return this;
  }

  getResult() {
    return this.house;
  }
}
