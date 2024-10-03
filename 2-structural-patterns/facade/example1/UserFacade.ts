import AuthService from './AuthService';
import NotificationService from './NotificationService';
import ProfileService from './ProfileService';

// STEP 2: Create the Facade Class

export default class UserFacade {
  private authService: AuthService;
  private profileService: ProfileService;
  private notificationService: NotificationService;

  constructor(
    authService: AuthService,
    profileService: ProfileService,
    notificationService: NotificationService,
  ) {
    this.authService = authService;
    this.profileService = profileService;
    this.notificationService = notificationService;
  }

  registerUser(email: string, password: string): void {
    this.authService.register(email, password);

    const userId = Math.floor(Math.random() * 1000); // Simulate a user ID
    this.notificationService.sendNotification(
      userId,
      'Welcome to our service!',
    );
  }

  loginUser(email: string, password: string): void {
    this.authService.login(email, password);
  }

  updateUserProfile(userId: number, profileData: any): void {
    this.profileService.updateProfile(userId, profileData);

    this.notificationService.sendNotification(
      userId,
      'Your profile has been updated.',
    );
  }
}
