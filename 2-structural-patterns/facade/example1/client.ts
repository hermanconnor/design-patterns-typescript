import AuthService from './AuthService';
import NotificationService from './NotificationService';
import ProfileService from './ProfileService';
import UserFacade from './UserFacade';

/**
 *  In this example, imagine you have a system where users can register, log in, update their profiles, and receive notifications. Instead of having to deal with each service individually, we can create a `UserFacade` to simplify these operations.
 */

// STEP 3: Using the Facade

const authService = new AuthService();
const profileService = new ProfileService();
const notificationService = new NotificationService();

const userFacade = new UserFacade(
  authService,
  profileService,
  notificationService,
);

// Register a user
userFacade.registerUser('user@example.com', 'securePassword123');

// Log in a user
userFacade.loginUser('user@example.com', 'securePassword123');

// Update user profile
userFacade.updateUserProfile(1, { name: 'John Doe', age: 30 });
