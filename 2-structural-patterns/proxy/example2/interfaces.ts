// STEP 1: Define the Subject Interface

export interface IUserService {
  getUser(id: number): Promise<IUser>;
}

export interface IUser {
  id: number;
  name: string;
}
