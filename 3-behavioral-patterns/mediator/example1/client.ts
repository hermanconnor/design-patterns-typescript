import AirTrafficControl from './AirTrafficControl';
import PlaneA from './PlaneA';
import PlaneB from './PlaneB';
import PlaneC from './PlaneC';

const atc = new AirTrafficControl();

// Create planes and register them with ATC
const planeA = new PlaneA(atc);
const planeB = new PlaneB(atc);
const planeC = new PlaneC(atc);

// Register the planes with the air traffic control system
atc.registerPlane(planeA);
atc.registerPlane(planeB);
atc.registerPlane(planeC);

// Planes send messages, but they only communicate via ATC (Mediator)
planeA.sendMessage('Plane A is approaching 10 miles west.');
planeB.sendMessage('Plane B is descending to 3000 feet.');
planeC.sendMessage('Plane C is turning left to avoid collision.');
