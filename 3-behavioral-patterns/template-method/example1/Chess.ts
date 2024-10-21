import Game from './Game';

// Concrete class for Chess

class Chess extends Game {
  explainRules(): void {
    console.log('Explaining chess rules.');
  }

  startPlay(): void {
    console.log('Starting the chess game.');
  }
}

export default Chess;
