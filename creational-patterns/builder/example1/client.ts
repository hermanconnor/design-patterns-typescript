import IglooDirector from './IglooDirector';
import CastleDirector from './CastleDirector';
import HouseBoatDirector from './HouseBoatDirector';

const IGLOO = IglooDirector.construct();
const CASTLE = CastleDirector.construct();
const HOUSEBOAT = HouseBoatDirector.construct();

console.log(IGLOO.construction());
console.log(CASTLE.construction());
console.log(HOUSEBOAT.construction());
