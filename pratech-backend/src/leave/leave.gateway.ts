import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class LeaveGateway {
  @WebSocketServer()
  server: Server;

  // Tüm bağlı cihazlara yenileme sinyali gönderir
  emitRefresh() {
    this.server.emit('refresh_data');
  }
}