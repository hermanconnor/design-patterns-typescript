import { IUserService } from './interfaces';
import UserServiceProxy from './UserServiceProxy';

/**
 In this example, we want to implement a Proxy for a service that fetches user data from an API. We will use the Proxy to add caching functionality.
 
 Explanation:
    1. UserService Interface: Defines the methods available for the user service.
    2. RealUserService: Implements the actual user fetching logic, simulating a delay to mimic an API call.
    3. UserServiceProxy: Caches user data. Before making an API call, it checks if the user is already cached. If so, it returns the cached user; otherwise, it fetches the user and caches it.
    4. Main Function: Demonstrates how to use the proxy. The first call to fetch a user results in an API call, while subsequent calls for the same user return cached data.

 This example illustrates the Proxy pattern effectively by enhancing functionality (caching) while controlling access to the underlying `RealUserService`.
 */

async function main() {
  const userService: IUserService = new UserServiceProxy();

  // Fetch user with id 1
  console.log(await userService.getUser(1)); // Fetches from API
  // Fetch user with id 1 again
  console.log(await userService.getUser(1)); // Returns from cache

  // Fetch user with id 2
  console.log(await userService.getUser(2)); // Fetches from API
  // Fetch user with id 2 again
  console.log(await userService.getUser(2)); // Returns from cache
}

main();
