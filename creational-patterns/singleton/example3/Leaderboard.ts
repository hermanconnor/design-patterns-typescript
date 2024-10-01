export default class Leaderboard {
  private static instance: Leaderboard;
  private table: { [id: number]: string } = {};

  private constructor() {}

  public static getInstance(): Leaderboard {
    if (!Leaderboard.instance) {
      Leaderboard.instance = new Leaderboard();
    }

    return Leaderboard.instance;
  }

  public addWinner(position: number, name: string): void {
    this.table[position] = name;
  }

  public print(): void {
    console.log('-----------Leaderboard-----------');

    for (const key in this.table) {
      console.log(`|\t${key}\t|\t${this.table[key]}\t|`);
    }

    console.log();
  }
}
