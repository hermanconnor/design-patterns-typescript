import { IUser, IUserService } from './interfaces';
import RealUserService from './RealUserService';

// STEP 3: Implement the Proxy

class UserServiceProxy implements IUserService {
  private realUserService: RealUserService;
  private cache: Map<number, IUser>;

  constructor() {
    this.realUserService = new RealUserService();
    this.cache = new Map();
  }

  async getUser(id: number): Promise<IUser> {
    // Check if the user is already cached
    if (this.cache.has(id)) {
      console.log(`Returning cached user with id: ${id}`);
      return this.cache.get(id)!;
    }

    // Fetch the user from the real service and cache it
    const user = await this.realUserService.getUser(id);
    this.cache.set(id, user);
    return user;
  }
}

export default UserServiceProxy;
