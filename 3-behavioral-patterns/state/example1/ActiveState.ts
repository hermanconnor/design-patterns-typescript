import DeactivatedState from './DeactivatedState';
import { IAccountState } from './interfaces';
import SuspendedState from './SuspendedState';
import UserAccount from './UserAccount';

// Concrete states

class ActiveState implements IAccountState {
  login(account: UserAccount): void {
    console.log('User logged in.');
  }

  logout(account: UserAccount): void {
    console.log('User logged out.');
  }

  suspend(account: UserAccount): void {
    console.log('Suspending account...');
    account.setState(new SuspendedState());
  }

  deactivate(account: UserAccount): void {
    console.log('Deactivating account...');
    account.setState(new DeactivatedState());
  }
}

export default ActiveState;
