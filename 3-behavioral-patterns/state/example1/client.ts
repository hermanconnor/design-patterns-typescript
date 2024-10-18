import ActiveState from './ActiveState';
import UserAccount from './UserAccount';

const userAccount = new UserAccount(new ActiveState());

userAccount.login();
userAccount.suspend();
userAccount.login();
userAccount.deactivate();

userAccount.login();
userAccount.suspend();

/**
We have an example of a User Account system. The user account can be in different states such as Active, Suspended, or Deactivated. Each state will have specific behaviors for actions like logging in, logging out, and changing the account state.
 
Explanation
  1. State Interface (IAccountState): This defines the actions available for the user account.

  2. Concrete States:
    - ActiveState: Allows logging in and out, and can transition to Suspended or Deactivated.
    - SuspendedState: Allows logging in but not logging out, and can only transition to Deactivated.
    - DeactivatedState: Prevents any actions and signifies that the account is inactive.

  3. Context Class (UserAccount): Holds a reference to the current state. It delegates method calls to the current state and allows changing the state.

  4. Usage:
    - A UserAccount starts in the ActiveState. Depending on the user’s actions, the account can transition between states, encapsulating the behavior and making it easier to manage.
 */
