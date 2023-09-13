import express, { Express } from 'express';
import { Server }           from 'http';
import { LoggerService }    from './logger/logger';
import { UsersController }  from './users/users.controller';

const defaultPort = 8000;

export class App {
  private app: Express;

  private port: number;

  private server: Server | undefined;

  public constructor(
    private readonly logger: LoggerService,
    private readonly usersController: UsersController
  ) {
    this.app = express();
    this.port = defaultPort;
  }

  private useRoutes() {
    this.app.use('/users', this.usersController.router);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);

    this.logger.log('Application is running on port %s', this.port);
  }
}
