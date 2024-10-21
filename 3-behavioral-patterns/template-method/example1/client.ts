import Chess from './Chess';
import Game from './Game';
import Poker from './Poker';

// Client Code
function playGame(game: Game): void {
  game.startGame();
}

// Usage
const chess = new Chess();
const poker = new Poker();

playGame(chess);
console.log('-'.repeat(50));
playGame(poker);

/**
 * In this example, we implement a game setup process where different types of games (like chess and poker) have a similar overall structure but vary in specific setup details. Both chess and poker will follow a general process for starting a game, but the specifics will differ based on the type of game.
 
Explanation:
  1. Abstract Class (`Game`): This class defines the `startGame` method, which acts as the template method. It calls other methods in a specific order: `setupBoard`, `initializePlayers`, `explainRules`, and `startPlay`. The first three methods are concrete, while the last two are abstract.

  2. Concrete Classes (`Chess` and `Poker`): These classes implement the `explainRules` and `startPlay` methods, providing the specific rules and gameplay start processes for chess and poker.

  3. Client Code: The `playGame` function takes a `Game` object and calls the `startGame` method, initiating the game setup.
 */
