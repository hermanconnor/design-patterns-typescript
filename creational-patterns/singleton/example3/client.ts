import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';

const game1 = new Game1();
game1.addWinner(2, 'Doug Judy');

const game2 = new Game2();
game2.addWinner(3, 'Jake Peralta');

const game3 = new Game3();
game3.addWinner(1, 'Captain Holt');

game1.leaderboard.print();
game2.leaderboard.print();
game3.leaderboard.print();
