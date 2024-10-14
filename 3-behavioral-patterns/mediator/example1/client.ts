import AirTrafficControl from './AirTrafficControl';
import PlaneA from './PlaneA';
import PlaneB from './PlaneB';
import PlaneC from './PlaneC';

/**
In this example, we simulate a simple air traffic control system.The planes communicate only with the Air Traffic Control (ATC) system. The ATC coordinates messages between planes to avoid collisions, manage routes, etc.

Components:
  1. Air Traffic Controller (Mediator): Coordinates communication between planes.
  2. Planes (Colleagues): Planes that need to receive and send messages related to air traffic and their own positions.

Explanation:
  Mediator (AirTrafficControl): The ATC system is the mediator that coordinates communication between the planes. Each plane only interacts with ATC, not with the other planes directly.
  Planes (Colleagues): The planes send messages about their position, direction, altitude, etc., and ATC relays those messages to the other planes.
 */

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
