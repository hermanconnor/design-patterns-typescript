import UserAccount from './UserAccount';

// State interface

export interface IAccountState {
  login(account: UserAccount): void;
  logout(account: UserAccount): void;
  suspend(account: UserAccount): void;
  deactivate(account: UserAccount): void;
}
