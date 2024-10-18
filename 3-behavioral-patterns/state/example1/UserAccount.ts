import { IAccountState } from './interfaces';

// Context class

class UserAccount {
  private state: IAccountState;

  constructor(state: IAccountState) {
    this.state = state;
  }

  public setState(state: IAccountState): void {
    this.state = state;
  }

  public login(): void {
    this.state.login(this);
  }

  public logout(): void {
    this.state.logout(this);
  }

  public suspend(): void {
    this.state.suspend(this);
  }

  public deactivate(): void {
    this.state.deactivate(this);
  }
}

export default UserAccount;
