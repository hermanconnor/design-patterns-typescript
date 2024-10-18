import { IAccountState } from './interfaces';
import UserAccount from './UserAccount';

// Concrete states

class DeactivatedState implements IAccountState {
  login(account: UserAccount): void {
    console.log('Cannot log in. Account is deactivated.');
  }

  logout(account: UserAccount): void {
    console.log('Cannot log out. Account is deactivated.');
  }

  suspend(account: UserAccount): void {
    console.log('Cannot suspend. Account is already deactivated.');
  }

  deactivate(account: UserAccount): void {
    console.log('Account is already deactivated.');
  }
}

export default DeactivatedState;
