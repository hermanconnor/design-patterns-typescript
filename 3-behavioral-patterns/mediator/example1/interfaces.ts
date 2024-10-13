export interface IMediator {
  sendMessage(message: string, plane: IPlane): void;
}

export interface IPlane {
  receiveMessage(message: string): void;
  sendMessage(message: string): void;
}
