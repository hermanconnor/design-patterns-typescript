import Leaderboard from './Leaderboard';
import { IGame } from './types';

export default class Game2 implements IGame {
  leaderboard: Leaderboard;

  constructor() {
    this.leaderboard = Leaderboard.getInstance();
  }

  addWinner(position: number, name: string): void {
    this.leaderboard.addWinner(position, name);
  }
}
