import { IObserver } from './interfaces';

// Concrete Observer: User

class User implements IObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(article: string): void {
    console.log(`${this.name} received a new article: "${article}"`);
  }
}

export default User;
