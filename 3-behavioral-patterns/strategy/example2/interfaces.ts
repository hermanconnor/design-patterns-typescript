export interface IMessagingStrategy {
  sendMessage(recipient: string, message: string): void;
}
