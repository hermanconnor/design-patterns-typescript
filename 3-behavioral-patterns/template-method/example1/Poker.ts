import Game from './Game';

// Concrete class for Poker

class Poker extends Game {
  explainRules(): void {
    console.log('Explaining poker rules.');
  }

  startPlay(): void {
    console.log('Starting the poker game.');
  }
}

export default Poker;
