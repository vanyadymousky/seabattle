import io from 'socket.io-client';

class AbstractSocket {
  constructor() {
    this.socket = io('ws://localhost:3002/')
  }


}
