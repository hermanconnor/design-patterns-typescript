import House from './House';
import HouseBuilder from './HouseBuilder';

export default class IglooDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('Igloo')
      .setWallMaterial('Ice')
      .setNumberDoors(1)
      .getResult();
  }
}
