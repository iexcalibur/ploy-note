import { INestApplication } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, Socket } from 'socket.io';

import { Config } from '../config';
import {
  buildCorsAllowedOrigins,
  CORS_ALLOWED_HEADERS,
  CORS_ALLOWED_METHODS,
  corsOriginCallback,
} from '../cors';
import { AuthenticationRequired } from '../error';
import { URLHelper } from '../helpers';
import { PolyMindLogger } from '../logger';
import { WEBSOCKET_OPTIONS } from './options';

export class SocketIoAdapter extends IoAdapter {
  constructor(private readonly app: INestApplication) {
    super(app);
  }

  override createIOServer(port: number, options?: any): Server {
    const logger = this.app.get(PolyMindLogger);
    const config = this.app.get(WEBSOCKET_OPTIONS) as Config['websocket'] & {
      canActivate: (socket: Socket) => Promise<boolean>;
    };
    const url = this.app.get(URLHelper);
    const allowedOrigins = buildCorsAllowedOrigins(url);

    const server: Server = super.createIOServer(port, {
      ...config,
      ...options,
      cors: {
        origin: (
          origin: string | undefined,
          callback: (error: Error | null, allow?: boolean) => void
        ) => {
          corsOriginCallback(
            origin,
            allowedOrigins,
            blockedOrigin =>
              logger.warn(
                `Blocked WebSocket CORS request from origin: ${blockedOrigin}`
              ),
            callback
          );
        },
        credentials: true,
        methods: CORS_ALLOWED_METHODS,
        allowedHeaders: CORS_ALLOWED_HEADERS,
      },
    });

    if (config.canActivate) {
      server.use((socket, next) => {
        config
          .canActivate(socket)
          .then(pass => {
            if (pass) {
              next();
            } else {
              throw new AuthenticationRequired();
            }
          })
          .catch(e => {
            next(e);
          });
      });
    }

    // Uses Socket.io's default in-memory adapter (no Redis needed for single-server)
    return server;
  }
}
