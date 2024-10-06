import { IUser, IUserService } from './interfaces';

// STEP 2: Implement the RealSubject

class RealUserService implements IUserService {
  async getUser(id: number): Promise<IUser> {
    // Simulating an API call
    console.log(`Fetching user with id: ${id}`);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id, name: `User ${id}` });
      }, 1000); // Simulate network delay
    });
  }
}

export default RealUserService;
