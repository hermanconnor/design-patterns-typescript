import DeactivatedState from './DeactivatedState';
import { IAccountState } from './interfaces';
import UserAccount from './UserAccount';

// Concrete states

class SuspendedState implements IAccountState {
  login(account: UserAccount): void {
    console.log('User logged in with a suspended account.');
  }

  logout(account: UserAccount): void {
    console.log('User is already logged out.');
  }

  suspend(account: UserAccount): void {
    console.log('Account is already suspended.');
  }

  deactivate(account: UserAccount): void {
    console.log('Deactivating account...');
    account.setState(new DeactivatedState());
  }
}

export default SuspendedState;
