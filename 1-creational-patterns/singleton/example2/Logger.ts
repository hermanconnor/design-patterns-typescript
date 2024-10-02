export default class Logger {
  private static instance: Logger;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }
}
