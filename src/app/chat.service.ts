
export class ChatService {

  private allmessages = [];

  constructor() { }

  chatting(msg)
  {
    this.allmessages.push(msg);
  }
  getAllMessages()
  {
    return this.allmessages;
  }
}
