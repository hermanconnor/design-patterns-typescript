// STEP 1: Define the Complex Classes

export default class AuthService {
  register(email: string, password: string): void {
    console.log(`User registered with email: ${email}`);
  }

  login(email: string, password: string): void {
    console.log(`User logged in with email: ${email}`);
  }
}
