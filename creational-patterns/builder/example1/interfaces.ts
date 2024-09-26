import House from './House';

export interface IHouse {
  house: House;
  setBuildingType(buildingType: string): this;
  setWallMaterial(wallMaterial: string): this;
  setNumberDoors(numDoors: number): this;
  setNumberWindows(numWindows: number): this;
  getResult(): House;
}
