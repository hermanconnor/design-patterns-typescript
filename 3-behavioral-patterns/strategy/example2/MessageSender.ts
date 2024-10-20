import { IMessagingStrategy } from './interfaces';

class MessageSender {
  private messagingStrategy: IMessagingStrategy;

  constructor(messagingStrategy: IMessagingStrategy) {
    this.messagingStrategy = messagingStrategy;
  }

  setMessagingStrategy(messagingStrategy: IMessagingStrategy): void {
    this.messagingStrategy = messagingStrategy;
  }

  send(recipient: string, message: string): void {
    this.messagingStrategy.sendMessage(recipient, message);
  }
}

export default MessageSender;
