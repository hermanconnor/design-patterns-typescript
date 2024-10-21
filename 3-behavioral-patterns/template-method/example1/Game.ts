// Abstract class defining the template method

abstract class Game {
  // Template method
  startGame(): void {
    this.setupBoard();
    this.initializePlayers();
    this.explainRules();
    this.startPlay();
  }

  // Common Steps
  setupBoard(): void {
    console.log('Setting up the board...');
  }

  initializePlayers(): void {
    console.log('Initializing players...');
  }

  // Abstract methods to be implemented by subclasses
  abstract explainRules(): void;
  abstract startPlay(): void;
}

export default Game;
